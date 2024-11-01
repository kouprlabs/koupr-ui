import { MenuItem } from '@chakra-ui/react'
import { AccountMenu, NumberTag } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const meta: Meta<typeof AccountMenu> = {
  title: 'Components/Account Menu',
  component: AccountMenu,
}

export default meta
type Story = StoryObj<typeof AccountMenu>

export const Default: Story = {
  args: {
    name: 'Bruce Wayne',
    email: 'bruce.wayne@koupr.com',
    hasBadge: true,
    menuItems: (
      <>
        <MenuItem as={Link} to="/account/settings">
          Settings
        </MenuItem>
        <MenuItem as={Link} to="/account/invitation">
          <div className={cx('flex', 'flex-row', 'items-center', 'gap-1')}>
            <span>Invitations</span>
            <NumberTag>5</NumberTag>
          </div>
        </MenuItem>
        <MenuItem as={Link} to="/sign-out" className={cx('text-red-500')}>
          Sign Out
        </MenuItem>
      </>
    ),
  },
}
