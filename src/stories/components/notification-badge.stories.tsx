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
        <IconButton icon={<IconStacks />} aria-label="Tasks" />
      </NotificationBadge>
    </div>
  ),
}
