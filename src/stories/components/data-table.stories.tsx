// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { Avatar, Link } from '@chakra-ui/react'
import { DataTable, IconChat, IconFavorite, IconLogout } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'

const meta: Meta<typeof DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
}

type DataItem = {
  name: string
  symbol: string
  dateOfBirth: string
}

export default meta
type Story = StoryObj<typeof DataTable<DataItem>>

export const Default: Story = {
  args: {
    items: [
      {
        name: 'Bruce Wayne',
        symbol: 'Batman',
        dateOfBirth: '1915-04-07',
      },
      {
        name: 'Tony Stark',
        symbol: 'Iron Man',
        dateOfBirth: '1970-05-29',
      },
      {
        name: 'Steven Rogers',
        symbol: 'Captain America',
        dateOfBirth: '1918-07-04',
      },
      {
        name: 'Clinton Barton',
        symbol: 'Hawkeye',
        dateOfBirth: '1975-01-01',
      },
      {
        name: 'Natasha Romanoff',
        symbol: 'Black Widow',
        dateOfBirth: '1984-12-03',
      },
    ],
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
