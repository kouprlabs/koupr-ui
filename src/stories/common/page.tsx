import { NavBar } from '@koupr/ui'
import cx from 'classnames'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export const Page = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className={cx('flex', 'flex-col', 'gap-2')}>
      <NavBar
        items={[
          {
            title: 'List',
            href: '/workspace/list',
          },
          {
            title: 'Settings',
            href: '/workspace/settings',
          },
        ]}
        navigateFn={navigate}
        pathnameFn={() => location.pathname}
      />
      <Outlet />
    </div>
  )
}
