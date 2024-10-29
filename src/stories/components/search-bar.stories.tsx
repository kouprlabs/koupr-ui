import { useState } from 'react'
import { IconButton } from '@chakra-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { IconTune, SearchBar } from '../../components'

const meta: Meta<typeof SearchBar> = {
  title: 'Components/Search Bar',
  component: SearchBar,
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {
    placeholder: 'Search',
    buttons: <IconButton icon={<IconTune />} aria-label="Filters" />,
  },
  render: (args) => {
    const [query, setQuery] = useState('')
    return <SearchBar {...args} query={query} onSearch={setQuery} />
  },
}
