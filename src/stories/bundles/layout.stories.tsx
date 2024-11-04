import type { Meta, StoryObj } from '@storybook/react'
import { Layout } from '../common/layout'

const meta: Meta<typeof Layout> = {
  title: 'Bundles/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Layout>

export const Default: Story = {}
