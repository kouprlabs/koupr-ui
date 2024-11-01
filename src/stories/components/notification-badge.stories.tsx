import { IconButton } from '@chakra-ui/react'
import { IconStacks, NotificationBadge } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

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
    <NotificationBadge {...args}>
      <IconButton icon={<IconStacks />} aria-label="Tasks" />
    </NotificationBadge>
  ),
}
