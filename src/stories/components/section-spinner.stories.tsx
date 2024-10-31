// @ts-expect-error ignored
import { SectionSpinner } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SectionSpinner> = {
  title: 'Components/Section Spinner',
  component: SectionSpinner,
}

export default meta
type Story = StoryObj<typeof SectionSpinner>

export const Default: Story = {}
