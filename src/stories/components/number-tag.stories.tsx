// @ts-expect-error ignored
import { NumberTag } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

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
