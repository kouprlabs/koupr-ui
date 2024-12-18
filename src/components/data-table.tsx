// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactElement } from 'react'
import { IconButton, Table } from '@chakra-ui/react'
import cx from 'classnames'
import { IconMoreVert } from './icons'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu'

export interface DataTableProps<T> {
  items: T[]
  columns: DataTableColumn<T>[]
  actions?: DataTableAction<T>[]
  pagination?: ReactElement
}

export interface DataTableColumn<T> {
  title: string
  renderCell: (item: T) => ReactElement
}

export interface DataTableAction<T> {
  label: string
  icon?: ReactElement
  isDestructive?: boolean
  isDestructiveFn?: (item: T) => boolean
  isDisabled?: boolean
  isDisabledFn?: (item: T) => boolean
  isHidden?: boolean
  isHiddenFn?: (item: T) => boolean
  onClick?: (item: T) => void
}

export function DataTable<T>({
  items,
  columns,
  actions,
  pagination,
}: DataTableProps<T>) {
  return (
    <div className={cx('koupr-flex', 'koupr-flex-col', 'koupr-gap-3.5')}>
      <Table.Root variant="line">
        <Table.Header>
          <Table.Row>
            {columns.map((column, columnIndex) => (
              <Table.ColumnHeader key={columnIndex}>
                {column.title}
              </Table.ColumnHeader>
            ))}
            {actions ? <Table.ColumnHeader></Table.ColumnHeader> : null}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item, itemIndex) => (
            <Table.Row key={`row-${itemIndex}`}>
              {columns.map((column, colIndex) => (
                <Table.Cell key={`row-${itemIndex}-col-${colIndex}`}>
                  {column.renderCell(item)}
                </Table.Cell>
              ))}
              {actions ? (
                <Table.Cell className={cx('koupr-text-right')}>
                  <MenuRoot>
                    <MenuTrigger asChild>
                      <IconButton
                        variant="ghost"
                        title="Action menu"
                        aria-label="Action menu"
                      >
                        <IconMoreVert />
                      </IconButton>
                    </MenuTrigger>
                    <MenuContent>
                      {actions
                        ?.filter(
                          (action) =>
                            !!(!action.isHidden && !action.isHiddenFn?.(item)),
                        )
                        .map((action, actionIndex) => (
                          <MenuItem
                            key={`row-${itemIndex}-action-${actionIndex}`}
                            value={`row-${itemIndex}-action-${actionIndex}`}
                            className={cx({
                              'koupr-text-red-500': !!(
                                action.isDestructive ||
                                action.isDestructiveFn?.(item)
                              ),
                            })}
                            disabled={
                              !!(
                                action.isDisabled || action.isDisabledFn?.(item)
                              )
                            }
                            onClick={() => action.onClick?.(item)}
                          >
                            {action.icon}
                            {action.label}
                          </MenuItem>
                        ))}
                    </MenuContent>
                  </MenuRoot>
                </Table.Cell>
              ) : null}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      {pagination ? (
        <div className={cx('koupr-self-end')}>{pagination}</div>
      ) : null}
    </div>
  )
}
