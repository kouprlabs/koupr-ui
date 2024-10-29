import { Meta, StoryObj } from '@storybook/react'
import { SectionSpinner } from '../../components'

const meta: Meta<typeof SectionSpinner> = {
  title: 'Components/Section Spinner',
  component: SectionSpinner,
}

export default meta
type Story = StoryObj<typeof SectionSpinner>

export const Default: Story = {
  args: {},
}
