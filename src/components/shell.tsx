// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { MouseEvent, ReactElement } from 'react'
import cx from 'classnames'
import { StorageOptions } from '../common-types'
import { Sidenav, SidenavItem } from './sidenav'

export type ShellProps = {
  storage?: StorageOptions
  logo?: ReactElement
  homeHref?: string
  topBar?: ReactElement
  items?: ShellItem[]
  children?: ReactElement
  onContentClick?: (event: MouseEvent) => void
  pathnameFn?: () => string
  navigateFn?: (href: string) => void
}

export type ShellItem = {
  href: string
  icon: ReactElement
  primaryText: string
  secondaryText: string
}

export const Shell = ({
  logo,
  homeHref,
  topBar,
  items,
  storage,
  children,
  onContentClick,
  pathnameFn,
  navigateFn,
}: ShellProps) => (
  <div
    className={cx(
      'koupr-flex',
      'koupr-flex-row',
      'koupr-items-center',
      'koupr-gap-0',
      'koupr-h-full',
    )}
  >
    <Sidenav
      storage={storage}
      logo={logo}
      homeHref={homeHref}
      navigateFn={navigateFn}
    >
      {items?.map((item, index) => (
        <SidenavItem
          key={index}
          href={item.href}
          icon={item.icon}
          primaryText={item.primaryText}
          secondaryText={item.secondaryText}
          pathnameFn={pathnameFn}
          navigateFn={navigateFn}
        />
      ))}
    </Sidenav>
    <div
      className={cx(
        'koupr-flex',
        'koupr-flex-col',
        'koupr-items-center',
        'koupr-h-full',
        'koupr-w-full',
      )}
      onClick={onContentClick}
    >
      {topBar}
      <div
        className={cx(
          'koupr-flex',
          'koupr-flex-col',
          'koupr-w-full',
          'lg:koupr-w-[1250px]',
          'koupr-px-2',
          'koupr-pt-2',
          'koupr-overflow-y-auto',
          'koupr-overflow-x-hidden',
          'koupr-grow',
        )}
      >
        {children}
      </div>
    </div>
  </div>
)
