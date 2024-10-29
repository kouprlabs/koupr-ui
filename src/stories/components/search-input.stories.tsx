import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from '../../components'

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