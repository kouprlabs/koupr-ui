import { Avatar, Link } from '@chakra-ui/react'
import { DataTable, PagePagination, usePagePagination } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'

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
        cellFn: (item) => (
          <div className={cx('flex', 'flex-row', 'gap-1.5', 'items-center')}>
            <Avatar
              name={item.name}
              size="sm"
              className={cx('w-[40px]', 'h-[40px]')}
            />
            <Link className={cx('no-underline')}>{item.name}</Link>
          </div>
        ),
      },
      {
        title: 'Symbol',
        cellFn: (item) => <span>{item.symbol}</span>,
      },
    ],
  },
  render: (args) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { page, size, steps, setPage, setSize } = usePagePagination({
      navigate,
      location,
    })
    return (
      <div className={cx('flex', 'flex-col', 'items-end', 'gap-3.5')}>
        <DataTable {...args} />
        <PagePagination
          totalElements={100}
          totalPages={25}
          page={page}
          size={size}
          steps={steps}
          setPage={setPage}
          setSize={setSize}
        />
      </div>
    )
  },
}
