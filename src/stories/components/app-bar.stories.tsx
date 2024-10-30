import { useState } from 'react'
import { IconButton } from '@chakra-ui/react'
import {
  AppBar,
  IconAdmin,
  IconStacks,
  IconTune,
  IconUpload,
  NavBar,
  SearchBar, // @ts-expect-error ignored
} from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import { useLocation, useNavigate } from 'react-router-dom'

const meta: Meta<typeof AppBar> = {
  title: 'Components/App Bar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof AppBar>

export const WithNavBar: Story = {
  render: (args) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
      <AppBar
        {...args}
        bar={
          <NavBar
            items={[
              {
                href: '/',
                title: 'Workspaces',
              },
              {
                href: '/group',
                title: 'Groups',
              },
              {
                href: '/organizations',
                title: 'Organizations',
              },
            ]}
            pathnameFn={() => location.pathname}
            navigateFn={navigate}
          />
        }
        buttons={
          <>
            <IconButton icon={<IconAdmin />} aria-label="Cloud Console" />
            <IconButton icon={<IconUpload />} aria-label="Uploads" />
            <IconButton icon={<IconStacks />} aria-label="Tasks" />
          </>
        }
      />
    )
  },
}

export const WithSearchBar: Story = {
  render: (args) => {
    const [query, setQuery] = useState('')
    return (
      <AppBar
        {...args}
        bar={
          <SearchBar
            query={query}
            placeholder="Search"
            buttons={<IconButton icon={<IconTune />} aria-label="Filters" />}
            onSearch={setQuery}
            onClear={() => setQuery('')}
          />
        }
        buttons={
          <>
            <IconButton icon={<IconAdmin />} aria-label="Cloud Console" />
            <IconButton icon={<IconUpload />} aria-label="Uploads" />
            <IconButton icon={<IconStacks />} aria-label="Tasks" />
          </>
        }
      />
    )
  },
}

export const WithBoth: Story = {
  render: (args) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    return (
      <AppBar
        {...args}
        bar={
          <>
            <NavBar
              items={[
                {
                  href: '/',
                  title: 'Workspaces',
                },
                {
                  href: '/group',
                  title: 'Groups',
                },
                {
                  href: '/organizations',
                  title: 'Organizations',
                },
              ]}
              pathnameFn={() => location.pathname}
              navigateFn={navigate}
            />
            <SearchBar
              query={query}
              placeholder="Search"
              buttons={<IconButton icon={<IconTune />} aria-label="Filters" />}
              onSearch={setQuery}
              onClear={() => setQuery('')}
            />
          </>
        }
        buttons={
          <>
            <IconButton icon={<IconAdmin />} aria-label="Cloud Console" />
            <IconButton icon={<IconUpload />} aria-label="Uploads" />
            <IconButton icon={<IconStacks />} aria-label="Tasks" />
          </>
        }
      />
    )
  },
}
