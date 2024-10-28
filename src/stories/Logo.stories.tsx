import { Meta, StoryObj } from '@storybook/react'
import { Logo } from '../components'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
}
export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    type: 'voltaserve',
    size: 'md',
  },
}
