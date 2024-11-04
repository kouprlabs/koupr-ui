import { Avatar, Link } from '@chakra-ui/react'
import { DataTable, IconChat, IconFavorite, IconLogout } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'
import { Hero, items } from '../common/data'

const meta: Meta<typeof DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
}

export default meta
type Story = StoryObj<typeof DataTable<Hero>>

export const Default: Story = {
  args: {
    items: items,
    columns: [
      {
        title: 'Name',
        renderCell: (item) => (
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
        renderCell: (item) => <span>{item.symbol}</span>,
      },
      {
        title: 'Date of Birth',
        renderCell: (item) => (
          <span>{new Date(item.dateOfBirth).toLocaleString()}</span>
        ),
      },
    ],
    actions: [
      {
        label: 'Mark As Favorite',
        icon: <IconFavorite />,
        onClick: (item) => console.log(`Marking ${item.name} as favorite!`),
      },
      {
        label: 'Start Conversation',
        icon: <IconChat />,
        isDisabled: true,
        onClick: (item) =>
          console.log(`Starting a conversation with ${item.name}.`),
      },
      {
        label: 'Remove From Organization',
        icon: <IconLogout />,
        isDestructive: true,
        onClick: (item) =>
          console.log(`Removing ${item.name} from organization...`),
      },
    ],
  },
}
