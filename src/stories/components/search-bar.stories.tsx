// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { useState } from 'react'
import { IconButton } from '@chakra-ui/react'
import { IconTune, SearchBar } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SearchBar> = {
  title: 'Components/Search Bar',
  component: SearchBar,
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {
    placeholder: 'Search',
    buttons: (
      <IconButton
        icon={<IconTune />}
        title="Search filters"
        aria-label="Search filters"
      />
    ),
  },
  render: (args) => {
    const [query, setQuery] = useState('')
    return <SearchBar {...args} query={query} onSearch={setQuery} />
  },
}
