// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { IconButton } from '@chakra-ui/react'
import { IconStacks, NotificationBadge } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'

const meta: Meta<typeof NotificationBadge> = {
  title: 'Components/Notification Badge',
  component: NotificationBadge,
}

export default meta
type Story = StoryObj<typeof NotificationBadge>

export const Default: Story = {
  args: {
    hasBadge: true,
  },
  render: (args) => (
    <div className={cx('inline-block')}>
      <NotificationBadge {...args}>
        <IconButton title="Tasks" aria-label="Tasks">
          <IconStacks />
        </IconButton>
      </NotificationBadge>
    </div>
  ),
}
