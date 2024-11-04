import { Button } from '@chakra-ui/react'
import { SectionPlaceholder, IconPersonAdd } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SectionPlaceholder> = {
  title: 'Components/Section Placeholder',
  component: SectionPlaceholder,
}

export default meta
type Story = StoryObj<typeof SectionPlaceholder>

export const Default: Story = {
  args: {
    text: 'This organization has no invitations.',
    content: <Button leftIcon={<IconPersonAdd />}>Invite Members</Button>,
  },
}
