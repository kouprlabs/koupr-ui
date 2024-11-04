import { Avatar, Link } from '@chakra-ui/react'
import {
  DataTable,
  IconChat,
  IconFavorite,
  IconLogout,
  PagePagination,
  usePagePagination,
} from '@koupr/ui'
import cx from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import { items } from './data'

export const List = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { page, size, steps, setPage, setSize } = usePagePagination({
    navigateFn: navigate,
    searchFn: () => location.search,
  })

  return (
    <div className={cx('flex', 'flex-col', 'items-end', 'gap-3.5')}>
      <DataTable
        items={items}
        columns={[
          {
            title: 'Name',
            renderCell: (item) => (
              <div
                className={cx('flex', 'flex-row', 'gap-1.5', 'items-center')}
              >
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
      />
      <PagePagination
        totalElements={100}
        totalPages={25}
        page={page}
        size={size}
        steps={steps}
        setPage={setPage}
        setSize={setSize}
      />
    </div>
  )
}
