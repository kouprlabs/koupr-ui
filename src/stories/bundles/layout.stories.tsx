// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactElement, useEffect, useState } from 'react'
import { Button, IconButton, MenuItem, useDisclosure } from '@chakra-ui/react'
import {
  AccountMenu,
  AppBar,
  AuxiliaryDrawer,
  IconAdd,
  IconAdminPanelSettings,
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
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

type LayoutProps = {
  children?: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const tasks = useDisclosure()
  const uploads = useDisclosure()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/workspace')
    }
  }, [navigate])

  return (
    <Shell
      storage={{ prefix: 'layout', namespace: 'main' }}
      logo={<Logo type="koupr" size="sm" />}
      topBar={
        <AppBar
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
              <Button leftIcon={<IconAdd />} variant="solid" colorScheme="blue">
                New Workspace
              </Button>
              <IconButton
                icon={<IconAdminPanelSettings />}
                title="Open console"
                aria-label="Open console"
              />
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
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>
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
                    <MenuItem className={cx('text-red-500')}>Sign Out</MenuItem>
                  </>
                }
              />
            </>
          }
        />
      }
      items={[
        {
          href: '/workspace',
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
          href: '/organization',
          icon: <IconFlag />,
          primaryText: 'Organizations',
          secondaryText: 'Umbrellas for workspaces and users.',
        },
      ]}
      pathnameFn={() => location.pathname}
      navigateFn={navigate}
    >
      {children}
    </Shell>
  )
}

const meta: Meta<typeof Layout> = {
  title: 'Bundles/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Layout>

export const Default: Story = {
  args: {
    children: (
      <Routes>
        <Route
          path="/workspace"
          element={
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Duis nascetur
              magnis morbi laoreet; montes porta. Pulvinar nunc per accumsan sed
              suspendisse sit sapien. Venenatis maximus inceptos taciti
              vestibulum porta sagittis quisque ipsum erat. Risus sodales
              conubia leo facilisi dignissim potenti senectus. Lectus feugiat
              ornare amet iaculis metus inceptos adipiscing placerat. Vestibulum
              faucibus facilisis viverra magna litora. Molestie lorem leo
              malesuada dictumst porta erat sagittis ullamcorper sollicitudin.
              Hendrerit ante maximus tincidunt, venenatis mauris molestie.
            </p>
          }
        />
        <Route
          path="/group"
          element={
            <p>
              Commodo volutpat facilisis habitant; mattis ultrices mauris ex
              nisi. Consequat nascetur lacus sed fames convallis pretium sit
              justo. Gravida curabitur condimentum hac mi, ridiculus montes.
              Eros commodo porttitor erat amet primis imperdiet. Morbi at
              potenti volutpat litora viverra dapibus sapien. Fermentum sodales
              nullam aliquam fusce aliquam.
            </p>
          }
        />
        <Route
          path="/organization"
          element={
            <p>
              Dis eros primis condimentum a porttitor orci curabitur. Aluctus
              arcu blandit dui facilisi interdum pretium tristique. Cras nam
              congue parturient posuere tempor lectus? Felis hendrerit penatibus
              semper maximus convallis tortor. Et potenti quisque ex phasellus
              magnis leo netus. Hac enim ante curae odio libero feugiat metus
              conubia tincidunt.
            </p>
          }
        />
      </Routes>
    ),
  },
}
