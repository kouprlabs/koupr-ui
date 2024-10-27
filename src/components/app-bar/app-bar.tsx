import { useEffect } from 'react'
import { getAdminStatus } from '@/infra/token'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { activeNavChanged, NavType } from '@/store/ui/nav'
import cx from 'classnames'
import { useLocation } from 'react-router-dom'
import { AccountMenu } from '../account-menu'
import { AppDrawer } from '../app-drawer'
import { AppBarButton } from './app-bar-button'
import AppBarSearch from './app-bar-search'

const AppBar = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const activeNav = useAppSelector((state) => state.ui.nav.active)

  useEffect(() => {
    if (location.pathname.startsWith('/account')) {
      dispatch(activeNavChanged(NavType.Account))
    }
    if (location.pathname.startsWith('/organization')) {
      dispatch(activeNavChanged(NavType.Organizations))
    }
    if (location.pathname.startsWith('/group')) {
      dispatch(activeNavChanged(NavType.Groups))
    }
    if (location.pathname.startsWith('/workspace')) {
      dispatch(activeNavChanged(NavType.Workspaces))
    }
    if (location.pathname.startsWith('/console')) {
      dispatch(activeNavChanged(NavType.Console))
    }
  }, [location, dispatch])

  return (
    <div
      className={cx(
        'flex',
        'flex-row',
        'items-center',
        'gap-2',
        'shrink-0',
        'p-1.5',
        'w-full',
      )}
    >
      <div className={cx('grow')}>
        <AppBarSearch />
      </div>
      <div className={cx('flex', 'flex-row', 'items-center', 'gap-1.5')}>
        {activeNav === NavType.Workspaces ? <AppBarButton /> : null}
        {activeNav === NavType.Groups ? <AppBarButton /> : null}
        {activeNav === NavType.Organizations ? <AppBarButton /> : null}
        {getAdminStatus() ? <AppBarButton /> : null}
        <AppDrawer />
        <AppDrawer />
        <AccountMenu />
      </div>
    </div>
  )
}

export default AppBar
