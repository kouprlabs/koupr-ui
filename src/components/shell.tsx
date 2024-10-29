import { MouseEvent, ReactElement } from 'react'
import cx from 'classnames'
import { StorageOptions } from '../types'
import { LayoutDrawer, LayoutDrawerItem } from './layout-drawer'

export type ShellProps = {
  storage?: StorageOptions
  logo: ReactElement
  topBar: ReactElement
  items?: ShellItem[]
  children?: ReactElement
  onContentClick?: (event: MouseEvent) => void
  pathnameFn: () => string
  navigateFn: (href: string) => void
}

export type ShellItem = {
  href: string
  icon: ReactElement
  primaryText: string
  secondaryText: string
}

export const Shell = ({
  logo,
  topBar,
  items,
  storage,
  children,
  onContentClick,
  pathnameFn,
  navigateFn,
}: ShellProps) => (
  <div className={cx('flex', 'flex-row', 'items-center', 'gap-0', 'h-full')}>
    <LayoutDrawer storage={storage} logo={logo} navigateFn={navigateFn}>
      {items
        ? items.map((item, index) => (
            <LayoutDrawerItem
              key={index}
              href={item.href}
              icon={item.icon}
              primaryText={item.primaryText}
              secondaryText={item.secondaryText}
              pathnameFn={pathnameFn}
              navigateFn={navigateFn}
            />
          ))
        : null}
    </LayoutDrawer>
    <div
      className={cx('flex', 'flex-col', 'items-center', 'h-full', 'w-full')}
      onClick={onContentClick}
    >
      {topBar}
      <div
        className={cx(
          'flex',
          'flex-col',
          'w-full',
          'lg:w-[1250px]',
          'px-2',
          'pt-2',
          'overflow-y-auto',
          'overflow-x-hidden',
          'grow',
        )}
      >
        {children}
      </div>
    </div>
  </div>
)
