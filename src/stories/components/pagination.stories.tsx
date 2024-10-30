import { useState } from 'react'
import { Pagination } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    totalPages: 20,
  },
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onPageChange={setPage} />
  },
}
