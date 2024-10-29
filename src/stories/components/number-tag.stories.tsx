import { Meta, StoryObj } from '@storybook/react'
import { NumberTag } from '../../components'

const meta: Meta<typeof NumberTag> = {
  title: 'Components/Number Tag',
  component: NumberTag,
}

export default meta
type Story = StoryObj<typeof NumberTag>

export const Default: Story = {
  args: {
    children: '1',
  },
}
