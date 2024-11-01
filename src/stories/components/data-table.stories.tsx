import { DataTable } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
}

export default meta
type Story = StoryObj<typeof DataTable<Hero>>

type Hero = {
  name: string
  symbol: string
}

const items: Hero[] = [
  {
    name: 'Bruce Wayne',
    symbol: 'Batman',
  },
  {
    name: 'Tony Stark',
    symbol: 'Ironman',
  },
  {
    name: 'Steven Rogers',
    symbol: 'Captain America',
  },
]

export const Default: Story = {
  args: {
    items: items,
    columns: [
      {
        title: 'Name',
        cellFn: (item) => <span>{item.name}</span>,
      },
      {
        title: 'Symbol',
        cellFn: (item) => <span>{item.symbol}</span>,
      },
    ],
  },
}
