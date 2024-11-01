import { ReactElement } from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

export interface DataTableProps<T> {
  items: T[]
  columns: DataTableColumn<T>[]
}

export interface DataTableColumn<T> {
  title: string
  cellFn: (item: T) => ReactElement
}

export function DataTable<T>({ items, columns }: DataTableProps<T>) {
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
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
