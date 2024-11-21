// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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

export const SizeSm: Story = {
  args: {
    totalPages: 20,
    size: 'sm',
  },
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onPageChange={setPage} />
  },
}

export const SizeXs: Story = {
  args: {
    totalPages: 20,
    size: 'xs',
  },
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onPageChange={setPage} />
  },
}

export const SizeLg: Story = {
  args: {
    totalPages: 20,
    size: 'lg',
  },
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onPageChange={setPage} />
  },
}
