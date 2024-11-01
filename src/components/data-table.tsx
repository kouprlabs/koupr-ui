import { ReactElement } from 'react'

export interface DataTableProps<T> {
  items: T[]
  cellFn: (item: T) => ReactElement
}

export function DataTable<T>({ items, cellFn }: DataTableProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <div>{cellFn(item)}</div>
      ))}
    </div>
  )
}
