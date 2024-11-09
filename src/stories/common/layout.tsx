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
import cx from 'classnames'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export type LayoutProps = {
  children?: ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
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
              <Button
                as={Link}
                to="/new/workspace"
                leftIcon={<IconAdd />}
                variant="solid"
                colorScheme="blue"
              >
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
