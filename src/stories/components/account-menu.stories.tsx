// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { MenuItem } from '@chakra-ui/react'
import { AccountMenu, NumberTag } from '@koupr/ui'
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
        <MenuItem>Settings</MenuItem>
        <MenuItem>
          <div className={cx('flex', 'flex-row', 'items-center', 'gap-1')}>
            <span>Invitations</span>
            <NumberTag>5</NumberTag>
          </div>
        </MenuItem>
        <MenuItem className={cx('text-red-500')}>Sign Out</MenuItem>
      </>
    ),
  },
}
