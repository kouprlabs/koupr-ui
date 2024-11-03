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
}

export interface DataTableColumn<T> {
  title: string
  cellFn: (item: T) => ReactElement
}

export interface DataTableAction<T> {
  label: string
  icon?: ReactElement
  isDestructive?: boolean
  isDisabled?: boolean
  onClick?: (item: T) => void
}

export function DataTable<T>({ items, columns, actions }: DataTableProps<T>) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th>{column.title}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {items.map((item, itemIndex) => (
          <Tr key={`row-${itemIndex}`}>
            {columns.map((column, colIndex) => (
              <Td id={`row-${itemIndex}-col-${colIndex}`}>
                {column.cellFn(item)}
              </Td>
            ))}
            {actions ? (
              <Td className={cx('text-right')}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<IconMoreVert />}
                    variant="ghost"
                    aria-label="Menu Items"
                  />
                  <Portal>
                    <MenuList>
                      {actions?.map((menuItem, menuItemIndex) => (
                        <MenuItem
                          key={menuItemIndex}
                          icon={menuItem.icon}
                          className={cx({
                            'text-red-500': menuItem.isDestructive,
                          })}
                          isDisabled={menuItem.isDisabled}
                          onClick={() => menuItem.onClick?.(item)}
                        >
                          {menuItem.label}
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
  )
}
