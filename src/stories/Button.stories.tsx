import { Button } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <Button type="button" variant="solid" colorScheme="blue">
      Primary
    </Button>
  ),
}
