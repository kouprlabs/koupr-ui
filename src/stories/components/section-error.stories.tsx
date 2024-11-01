import { SectionError } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SectionError> = {
  title: 'Components/Section Error',
  component: SectionError,
}

export default meta
type Story = StoryObj<typeof SectionError>

export const Default: Story = {
  args: {
    text: 'Failed to load workspaces.',
  },
}
