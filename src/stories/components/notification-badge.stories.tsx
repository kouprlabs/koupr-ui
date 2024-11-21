// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE.md file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
        <IconButton icon={<IconStacks />} title="Tasks" aria-label="Tasks" />
      </NotificationBadge>
    </div>
  ),
}
