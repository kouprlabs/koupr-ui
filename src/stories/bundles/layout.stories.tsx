import { useState } from 'react'
import { Button, IconButton, MenuItem, useDisclosure } from '@chakra-ui/react'
import {
  AccountMenu,
  AppBar,
  AuxiliaryDrawer,
  IconAdd,
  IconAdmin,
  IconFlag,
  IconGroup,
  IconStacks,
  IconTune,
  IconUpload,
  IconWorkspaces,
  Logo,
  NumberTag,
  SearchBar,
  Shell,
} from '@koupr/ui'
import type { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const meta: Meta<typeof Shell> = {
  title: 'Bundles/Layout',
  component: Shell,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Shell>

export const ShellWithAppBar: Story = {
  render: () => {
    const location = useLocation()
    const navigate = useNavigate()
    const tasks = useDisclosure()
    const uploads = useDisclosure()
    const [query, setQuery] = useState('')

    return (
      <Shell
        storage={{ prefix: 'layout', namespace: 'main' }}
        logo={<Logo type="voltaserve" size="sm" />}
        topBar={
          <AppBar
            bar={
              <SearchBar
                query={query}
                placeholder="Search"
                buttons={
                  <IconButton icon={<IconTune />} aria-label="Filters" />
                }
                onSearch={setQuery}
                onClear={() => setQuery('')}
              />
            }
            buttons={
              <>
                <Button
                  as={Link}
                  to="/new/workspace"
                  leftIcon={<IconAdd />}
                  variant="solid"
                  colorScheme="blue"
                >
                  New Workspace
                </Button>
                <IconButton icon={<IconAdmin />} aria-label="Cloud Console" />
                <AuxiliaryDrawer
                  icon={<IconUpload />}
                  header="Uploads"
                  body={<></>}
                  isOpen={uploads.isOpen}
                  onClose={uploads.onClose}
                  onOpen={uploads.onOpen}
                />
                <AuxiliaryDrawer
                  icon={<IconStacks />}
                  header="Tasks"
                  body={<></>}
                  hasBadge={true}
                  isOpen={tasks.isOpen}
                  onOpen={tasks.onOpen}
                  onClose={tasks.onClose}
                />
                <AccountMenu
                  name="Bruce Wayne"
                  email="bruce.wayne@koupr.com"
                  hasBadge={true}
                  menuItems={
                    <>
                      <MenuItem as={Link} to="/account/settings">
                        Settings
                      </MenuItem>
                      <MenuItem as={Link} to="/account/invitation">
                        <div
                          className={cx(
                            'flex',
                            'flex-row',
                            'items-center',
                            'gap-1',
                          )}
                        >
                          <span>Invitations</span>
                          <NumberTag>5</NumberTag>
                        </div>
                      </MenuItem>
                      <MenuItem
                        as={Link}
                        to="/sign-out"
                        className={cx('text-red-500')}
                      >
                        Sign Out
                      </MenuItem>
                    </>
                  }
                />
              </>
            }
          />
        }
        items={[
          {
            href: '/',
            icon: <IconWorkspaces />,
            primaryText: 'Workspaces',
            secondaryText: 'Isolated containers for files and folders.',
          },
          {
            href: '/group',
            icon: <IconGroup />,
            primaryText: 'Groups',
            secondaryText: 'Allows assigning permissions to a group of users.',
          },
          {
            href: '/organizations',
            icon: <IconFlag />,
            primaryText: 'Organizations',
            secondaryText: 'Umbrellas for workspaces and users.',
          },
        ]}
        pathnameFn={() => location.pathname}
        navigateFn={navigate}
      ></Shell>
    )
  },
}
