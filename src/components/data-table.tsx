import { ReactElement } from 'react'
import { Sidenav } from '@koupr/ui'

export interface DataTableProps<T> {
  items: T[]
  cellFn: (item: T) => ReactElement
}

export function DataTable<T>({ items, cellFn }: DataTableProps<T>) {
  return (
    <Sidenav>
      {items.map((item) => (
        <div>{cellFn(item)}</div>
      ))}
    </Sidenav>
  )
}
