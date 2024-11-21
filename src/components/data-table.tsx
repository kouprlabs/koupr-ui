// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactElement } from 'react'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import cx from 'classnames'
import { IconMoreVert } from './icons'

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
    <div className={cx('flex', 'flex-col', 'gap-3.5')}>
      <Table variant="simple">
        <Thead>
          <Tr>
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex}>{column.title}</Th>
            ))}
            {actions ? <Th></Th> : null}
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item, itemIndex) => (
            <Tr key={`row-${itemIndex}`}>
              {columns.map((column, colIndex) => (
                <Td key={`row-${itemIndex}-col-${colIndex}`}>
                  {column.renderCell(item)}
                </Td>
              ))}
              {actions ? (
                <Td className={cx('koupr-text-right')}>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<IconMoreVert />}
                      variant="ghost"
                      title="Action menu"
                      aria-label="Action menu"
                    />
                    <Portal>
                      <MenuList>
                        {actions
                          ?.filter(
                            (action) =>
                              !!(
                                !action.isHidden && !action.isHiddenFn?.(item)
                              ),
                          )
                          .map((action, actionIndex) => (
                            <MenuItem
                              key={`row-${itemIndex}-action-${actionIndex}`}
                              icon={action.icon}
                              className={cx({
                                'koupr-text-red-500': !!(
                                  action.isDestructive ||
                                  action.isDestructiveFn?.(item)
                                ),
                              })}
                              isDisabled={
                                !!(
                                  action.isDisabled ||
                                  action.isDisabledFn?.(item)
                                )
                              }
                              onClick={() => action.onClick?.(item)}
                            >
                              {action.label}
                            </MenuItem>
                          ))}
                      </MenuList>
                    </Portal>
                  </Menu>
                </Td>
              ) : null}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {pagination ? <div className={cx('self-end')}>{pagination}</div> : null}
    </div>
  )
}
