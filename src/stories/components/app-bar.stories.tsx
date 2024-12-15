// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
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
            <IconButton title="Open console" aria-label="Open console">
              <IconAdminPanelSettings />
            </IconButton>
            <IconButton title="Uploads" aria-label="Uploads">
              <IconUpload />
            </IconButton>
            <IconButton title="Tasks" aria-label="Tasks">
              <IconStacks />
            </IconButton>
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
              <IconButton title="Search filters" aria-label="Search filters">
                <IconTune />
              </IconButton>
            }
            onSearch={setQuery}
            onClear={() => setQuery('')}
          />
        }
        buttons={
          <>
            <IconButton title="Open Console" aria-label="Open Console">
              <IconAdminPanelSettings />
            </IconButton>
            <IconButton title="Uploads" aria-label="Uploads">
              <IconUpload />
            </IconButton>
            <IconButton title="Tasks" aria-label="Tasks">
              <IconStacks />
            </IconButton>
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
                <IconButton title="Search filters" aria-label="Search filters">
                  <IconTune />
                </IconButton>
              }
              onSearch={setQuery}
              onClear={() => setQuery('')}
            />
          </>
        }
        buttons={
          <>
            <IconButton title="Open console" aria-label="Open console">
              <IconAdminPanelSettings />
            </IconButton>
            <IconButton title="Uploads" aria-label="Uploads">
              <IconUpload />
            </IconButton>
            <IconButton title="Tasks" aria-label="Tasks">
              <IconStacks />
            </IconButton>
          </>
        }
      />
    )
  },
}
