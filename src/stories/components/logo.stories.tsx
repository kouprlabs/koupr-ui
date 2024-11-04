import { Logo } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
}

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    type: 'voltaserve',
    size: 'sm',
  },
}
