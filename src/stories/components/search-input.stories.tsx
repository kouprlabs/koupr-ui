// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { useState } from 'react'
import { SearchInput } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SearchInput> = {
  title: 'Components/Search Input',
  component: SearchInput,
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  args: {
    placeholder: 'Search',
  },
  render: (args) => {
    const [query, setQuery] = useState('')
    return <SearchInput {...args} query={query} onChange={setQuery} />
  },
}
