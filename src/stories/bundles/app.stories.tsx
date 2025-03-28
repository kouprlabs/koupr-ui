// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactElement, useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  IconButton,
  MenuItem,
  Progress,
  Switch,
  Link,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  CircularProgress,
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
  IconCheckCircle,
  IconDelete,
  IconEdit,
  IconError,
  IconFavorite,
  IconFlag,
  IconGroup,
  IconHourglass,
  IconLogout,
  IconStacks,
  IconTune,
  IconUpload,
  IconWorkspaces,
  Logo,
  NumberTag,
  PagePagination,
  Pagination,
  SearchBar,
  SectionError,
  SectionPlaceholder,
  SectionSpinner,
  Shell,
  Text,
  usePagePagination,
} from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'
import {
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
        <Route path="/group" element={<SimulateLoadAndFail />} />
        <Route
          path="/organization"
          element={
            <SectionPlaceholder
              text="There are no organizations."
              content={
                <Button leftIcon={<IconAdd />} variant="solid">
                  New Organization
                </Button>
              }
            />
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
                body={
                  <SectionPlaceholder
                    text="There are no uploads."
                    content={
                      <Button leftIcon={<IconUpload />} variant="solid">
                        Upload File
                      </Button>
                    }
                  />
                }
                isOpen={uploads.isOpen}
                onClose={uploads.onClose}
                onOpen={uploads.onOpen}
              />
              <AuxiliaryDrawer
                icon={<IconStacks />}
                header="Tasks"
                body={<CardList />}
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
        },
        {
          href: '/group',
          icon: <IconGroup />,
          primaryText: 'Groups',
        },
        {
          href: '/organization',
          icon: <IconFlag />,
          primaryText: 'Organizations',
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

type DataItem = {
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
    <DataTable<DataItem>
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
              <Link className={cx('no-underline')}>{item.name}</Link>
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

const SimulateLoadAndFail = () => {
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsError(true), 1000)
  }, [])

  return (
    <>
      {!isError ? <SectionSpinner /> : null}
      {isError ? <SectionError text="Sample error message." /> : null}
    </>
  )
}

type CardItem = {
  title: string
  icon: ReactElement
  accordion?: {
    title: string
    content: string
  }
}

const CardList = () => {
  const [page, setPage] = useState(1)
  const items: CardItem[] = [
    {
      title: 'Lorem ipsum dolor sit amet',
      icon: (
        <CircularProgress
          isIndeterminate={true}
          className={cx('text-black')}
          size="20px"
        />
      ),
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      icon: <IconHourglass />,
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      icon: (
        <IconCheckCircle
          className={cx('shrink-0', 'text-green-500')}
          filled={true}
        />
      ),
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      icon: <IconError filled={true} className={cx('text-red-500')} />,
      accordion: {
        title: 'Expand to view details.',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    },
  ]

  return (
    <div
      className={cx(
        'flex',
        'flex-col',
        'gap-1.5',
        'justify-between',
        'items-center',
        'h-full',
      )}
    >
      <div
        className={cx(
          'flex',
          'flex-col',
          'gap-1.5',
          'w-full',
          'overflow-y-auto',
        )}
      >
        {items.map((item, index) => (
          <Card key={index} variant="outline">
            <CardBody>
              <div className={cx('flex', 'flex-col', 'gap-1')}>
                <div
                  className={cx('flex', 'flex-row', 'items-center', 'gap-1.5')}
                >
                  {item.icon}
                  {item.title}
                </div>
                {item.accordion ? (
                  <Accordion allowMultiple>
                    <AccordionItem className={cx('border-none')}>
                      <AccordionButton className={cx('p-0.5')}>
                        <div className={cx('flex', 'flex-row', 'w-full')}>
                          <span className={cx('text-left', 'grow')}>
                            {item.accordion.title}
                          </span>
                          <AccordionIcon />
                        </div>
                      </AccordionButton>
                      <AccordionPanel className={cx('p-0.5')}>
                        <Text className={cx('text-red-500')} noOfLines={5}>
                          {item.accordion.content}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                ) : null}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <Pagination
        size="sm"
        maxButtons={3}
        page={page}
        totalPages={3}
        onPageChange={(value) => setPage(value)}
      />
    </div>
  )
}
