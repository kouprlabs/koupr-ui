import { ReactElement, useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  IconButton,
  MenuItem,
  Progress,
  Switch,
  Link as ChakraLink,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react'
import {
  AccountMenu,
  AppBar,
  AuxiliaryDrawer,
  DataTable,
  Form,
  IconAdd,
  IconAdminPanelSettings,
  IconChat,
  IconDelete,
  IconEdit,
  IconFavorite,
  IconFlag,
  IconGroup,
  IconLogout,
  IconStacks,
  IconTune,
  IconUpload,
  IconWorkspaces,
  Logo,
  NumberTag,
  PagePagination,
  SearchBar,
  Shell,
  usePagePagination,
} from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/workspace') {
      navigate('/workspace/data-table')
    }
  }, [location.pathname, navigate])

  return (
    <Layout>
      <Routes>
        <Route
          path="/workspace"
          element={<Page />}
          children={
            <>
              <Route
                path="/workspace/data-table"
                element={<SampleDataTable />}
              />
              <Route path="/workspace/form" element={<SampleForm />} />
            </>
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
    </Layout>
  )
}

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

const Page = () => {
  const navigate = useNavigate()
  return (
    <div className={cx('flex', 'flex-col', 'gap-2')}>
      <Tabs variant="solid-rounded" colorScheme="gray">
        <TabList>
          <Tab onClick={() => navigate('/workspace/data-table')}>
            Data Table
          </Tab>
          <Tab onClick={() => navigate('/workspace/form')}>Form</Tab>
        </TabList>
      </Tabs>
      <Outlet />
    </div>
  )
}

const meta: Meta<typeof App> = {
  title: 'Bundles/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof App>

export const Default: Story = {}

type SampleItem = {
  name: string
  symbol: string
  dateOfBirth: string
}

const SampleDataTable = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { page, size, steps, setPage, setSize } = usePagePagination({
    navigateFn: navigate,
    searchFn: () => location.search,
  })

  return (
    <DataTable<SampleItem>
      items={[
        {
          name: 'Bruce Wayne',
          symbol: 'Batman',
          dateOfBirth: '1915-04-07',
        },
        {
          name: 'Tony Stark',
          symbol: 'Iron Man',
          dateOfBirth: '1970-05-29',
        },
        {
          name: 'Steven Rogers',
          symbol: 'Captain America',
          dateOfBirth: '1918-07-04',
        },
        {
          name: 'Clinton Barton',
          symbol: 'Hawkeye',
          dateOfBirth: '1975-01-01',
        },
        {
          name: 'Natasha Romanoff',
          symbol: 'Black Widow',
          dateOfBirth: '1984-12-03',
        },
      ]}
      columns={[
        {
          title: 'Name',
          renderCell: (item) => (
            <div className={cx('flex', 'flex-row', 'gap-1.5', 'items-center')}>
              <Avatar
                name={item.name}
                size="sm"
                className={cx('w-[40px]', 'h-[40px]')}
              />
              <ChakraLink className={cx('no-underline')}>
                {item.name}
              </ChakraLink>
            </div>
          ),
        },
        {
          title: 'Symbol',
          renderCell: (item) => <span>{item.symbol}</span>,
        },
        {
          title: 'Date of Birth',
          renderCell: (item) => (
            <span>{new Date(item.dateOfBirth).toLocaleString()}</span>
          ),
        },
      ]}
      actions={[
        {
          label: 'Mark As Favorite',
          icon: <IconFavorite />,
          onClick: (item) => console.log(`Marking ${item.name} as favorite!`),
        },
        {
          label: 'Start Conversation',
          icon: <IconChat />,
          isDisabled: true,
          onClick: (item) =>
            console.log(`Starting a conversation with ${item.name}.`),
        },
        {
          label: 'Remove From Organization',
          icon: <IconLogout />,
          isDestructive: true,
          onClick: (item) =>
            console.log(`Removing ${item.name} from organization...`),
        },
      ]}
      pagination={
        <PagePagination
          totalElements={100}
          totalPages={25}
          page={page}
          size={size}
          steps={steps}
          setPage={setPage}
          setSize={setSize}
        />
      }
    />
  )
}

const SampleForm = () => (
  <Form
    sections={[
      {
        title: 'Storage',
        content: (
          <>
            <span>5.67 GB of 38 GB used</span>
            <Progress value={20} hasStripe />
          </>
        ),
      },
      {
        title: 'Basics',
        rows: [
          {
            label: 'Full name',
            content: (
              <>
                <span>Bruce Wayne</span>
                <IconButton
                  icon={<IconEdit />}
                  className={cx('h-[40px]', 'w-[40px]')}
                  title="Edit full name"
                  aria-label="Edit full name"
                />
              </>
            ),
          },
        ],
      },
      {
        title: 'Credentials',
        rows: [
          {
            label: 'Email',
            content: (
              <>
                <span>bruce.wayne@koupr.com</span>
                <IconButton
                  icon={<IconEdit />}
                  className={cx('h-[40px]', 'w-[40px]')}
                  title="Edit email"
                  aria-label="Edit email"
                />
              </>
            ),
          },
          {
            label: 'Password',
            content: (
              <IconButton
                icon={<IconEdit />}
                className={cx('h-[40px]', 'w-[40px]')}
                title="Change password"
                aria-label="Change password"
              />
            ),
          },
        ],
      },
      {
        title: 'Theme',
        rows: [
          {
            label: 'Dark mode',
            content: <Switch />,
          },
        ],
      },
      {
        title: 'Advanced',
        rows: [
          {
            label: 'Delete account',
            content: (
              <IconButton
                icon={<IconDelete />}
                variant="solid"
                colorScheme="red"
                title="Delete account"
                aria-label="Delete account"
              />
            ),
          },
        ],
      },
    ]}
  />
)
