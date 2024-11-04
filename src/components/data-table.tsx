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
  renderCell: (item: T) => ReactElement
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
          {columns.map((column, columnIndex) => (
            <Th key={columnIndex}>{column.title}</Th>
          ))}
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
                      {actions?.map((action, actionIndex) => (
                        <MenuItem
                          key={`row-${itemIndex}-action-${actionIndex}`}
                          icon={action.icon}
                          className={cx({
                            'text-red-500': action.isDestructive,
                          })}
                          isDisabled={action.isDisabled}
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
  )
}
