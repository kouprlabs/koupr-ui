// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { useState } from 'react'
import { IconButton } from '@chakra-ui/react'
import {
  AppBar,
  IconAdminPanelSettings,
  IconStacks,
  IconTune,
  IconUpload,
  NavBar,
  SearchBar,
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
  name: 'Nav Bar',
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
            <IconButton
              icon={<IconAdminPanelSettings />}
              title="Open console"
              aria-label="Open console"
            />
            <IconButton
              icon={<IconUpload />}
              title="Uploads"
              aria-label="Uploads"
            />
            <IconButton
              icon={<IconStacks />}
              title="Tasks"
              aria-label="Tasks"
            />
          </>
        }
      />
    )
  },
}

export const WithSearchBar: Story = {
  name: 'Search Bar',
  render: (args) => {
    const [query, setQuery] = useState('')
    return (
      <AppBar
        {...args}
        bar={
          <SearchBar
            query={query}
            placeholder="Search"
            buttons={
              <IconButton
                icon={<IconTune />}
                title="Search filters"
                aria-label="Search filters"
              />
            }
            onSearch={setQuery}
            onClear={() => setQuery('')}
          />
        }
        buttons={
          <>
            <IconButton
              icon={<IconAdminPanelSettings />}
              title="Open Console"
              aria-label="Open Console"
            />
            <IconButton
              icon={<IconUpload />}
              title="Uploads"
              aria-label="Uploads"
            />
            <IconButton
              icon={<IconStacks />}
              title="Tasks"
              aria-label="Tasks"
            />
          </>
        }
      />
    )
  },
}

export const WithBoth: Story = {
  name: 'Nav Bar + Search Bar',
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
              buttons={
                <IconButton
                  icon={<IconTune />}
                  title="Search filters"
                  aria-label="Search filters"
                />
              }
              onSearch={setQuery}
              onClear={() => setQuery('')}
            />
          </>
        }
        buttons={
          <>
            <IconButton
              icon={<IconAdminPanelSettings />}
              title="Open console"
              aria-label="Open console"
            />
            <IconButton
              icon={<IconUpload />}
              title="Uploads"
              aria-label="Uploads"
            />
            <IconButton
              icon={<IconStacks />}
              title="Tasks"
              aria-label="Tasks"
            />
          </>
        }
      />
    )
  },
}
