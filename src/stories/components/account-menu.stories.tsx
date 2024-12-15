// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { AccountMenu, MenuItem, NumberTag } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'

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
    isLoading: false,
    menuItems: (
      <>
        <MenuItem value="settings">Settings</MenuItem>
        <MenuItem value="invitations">
          <div className={cx('flex', 'flex-row', 'items-center', 'gap-1')}>
            <span>Invitations</span>
            <NumberTag>5</NumberTag>
          </div>
        </MenuItem>
        <MenuItem
          color="fg.error"
          _hover={{ bg: 'bg.error', color: 'fg.error' }}
          value="sign-out"
        >
          Sign Out
        </MenuItem>
      </>
    ),
  },
}
