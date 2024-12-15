// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { useEffect } from 'react'
import { IconButton, Link, Tabs } from '@chakra-ui/react'
import {
  Avatar,
  DataTable,
  Form,
  IconChat,
  IconDelete,
  IconEdit,
  IconFavorite,
  IconLogout,
  PagePagination,
  ProgressBar,
  ProgressRoot,
  Switch,
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

const Page = () => {
  const navigate = useNavigate()
  return (
    <div className={cx('flex', 'flex-col', 'gap-2')}>
      <Tabs.Root variant="subtle" colorScheme="gray">
        <Tabs.List>
          <Tabs.Trigger
            value="data-table"
            onClick={() => navigate('/workspace/data-table')}
          >
            Data Table
          </Tabs.Trigger>
          <Tabs.Trigger
            value="form"
            onClick={() => navigate('/workspace/form')}
          >
            Form
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <Outlet />
    </div>
  )
}

const meta: Meta<typeof Page> = {
  title: 'Bundles/Page',
  component: Page,
  render: () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
      if (location.pathname === '/') {
        navigate('/workspace/data-table')
      }
    }, [location.pathname, navigate])

    return (
      <Routes>
        <Route path="/workspace" element={<Page />}>
          <Route path="/workspace/data-table" element={<SampleDataTable />} />
          <Route path="/workspace/form" element={<SampleForm />} />
        </Route>
      </Routes>
    )
  },
}

export default meta
type Story = StoryObj<typeof Page>

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
            <ProgressRoot value={20}>
              <ProgressBar />
            </ProgressRoot>
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
                  className={cx('h-[40px]', 'w-[40px]')}
                  title="Edit full name"
                  aria-label="Edit full name"
                >
                  <IconEdit />
                </IconButton>
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
                  className={cx('h-[40px]', 'w-[40px]')}
                  title="Edit email"
                  aria-label="Edit email"
                >
                  <IconEdit />
                </IconButton>
              </>
            ),
          },
          {
            label: 'Password',
            content: (
              <IconButton
                className={cx('h-[40px]', 'w-[40px]')}
                title="Change password"
                aria-label="Change password"
              >
                <IconEdit />
              </IconButton>
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
                variant="solid"
                colorScheme="red"
                title="Delete account"
                aria-label="Delete account"
              >
                <IconDelete />
              </IconButton>
            ),
          },
        ],
      },
    ]}
  />
)
