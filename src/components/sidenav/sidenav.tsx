// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { Link } from '@chakra-ui/react'
import cx from 'classnames'
import { StorageOptions } from '../../common-types'
import { IconChevronLeft, IconChevronRight } from '../icons'
import { SidenavContext } from './sidenav-context'

export type SidenavProps = {
  children?: ReactNode
  logo?: ReactNode
  storage?: StorageOptions
  homeHref?: string
  navigateFn?: (href: string) => void
}

export const Sidenav = ({
  children,
  storage,
  logo,
  homeHref,
  navigateFn,
}: SidenavProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean | undefined>(undefined)
  const [isTouched, setIsTouched] = useState(false)
  const localStorageCollapsedKey = useMemo(
    () =>
      `${storage?.prefix || 'app'}_${
        storage?.namespace || 'main'
      }_drawer_collapsed`,
    [storage],
  )

  useEffect(() => {
    let collapse = false
    if (typeof localStorage !== 'undefined') {
      const value = localStorage.getItem(localStorageCollapsedKey)
      if (value) {
        collapse = JSON.parse(value)
      } else {
        localStorage.setItem(localStorageCollapsedKey, JSON.stringify(true))
      }
    }
    setIsCollapsed(collapse)
  }, [localStorageCollapsedKey, setIsCollapsed])

  if (isCollapsed === undefined) {
    return null
  }

  return (
    <SidenavContext.Provider
      value={{
        isCollapsed,
        isTouched,
      }}
    >
      <div
        className={cx(
          'koupr-flex',
          'koupr-flex-col',
          'koupr-h-full',
          'koupr-border-r',
          'koupr-border-r-gray-200',
          'dark:koupr-border-r-gray-700',
          'koupr-shrink-0',
          'koupr-gap-0',
        )}
      >
        {logo ? (
          <div
            className={cx(
              'koupr-flex',
              'koupr-items-center',
              'koupr-justify-center',
              'koupr-h-[80px]',
            )}
          >
            <Link onClick={() => navigateFn?.(homeHref ?? '/')}>
              <div className={cx('koupr-flex', 'koupr-h-[40px]')}>
                <div
                  className={cx(
                    'koupr-flex',
                    'koupr-items-center',
                    'koupr-justify-center',
                    'koupr-w-[40px]',
                    'koupr-h-[40px]',
                  )}
                >
                  {logo}
                </div>
              </div>
            </Link>
          </div>
        ) : null}
        <div
          className={cx(
            'koupr-flex',
            'koupr-flex-col',
            'koupr-items-center',
            'koupr-gap-0.5',
            { 'koupr-pt-0': logo },
            { 'koupr-pt-1.5': !logo },
            'koupr-pr-1.5',
            'koupr-pb-1.5',
            'koupr-pl-1.5',
          )}
        >
          {children}
        </div>
        <div className={cx('koupr-grow')} />
        <div
          className={cx(
            'koupr-flex',
            'koupr-flex-row',
            'koupr-items-center',
            'koupr-gap-0',
            {
              'koupr-justify-center': isCollapsed,
              'koupr-justify-end': !isCollapsed,
            },
            'koupr-h-[50px]',
            'koupr-w-full',
            { 'koupr-px-0': isCollapsed, 'koupr-px-1.5': !isCollapsed },
            'koupr-cursor-pointer',
            'hover:koupr-bg-gray-100',
            'hover:dark:koupr-bg-gray-600',
            'active:koupr-bg-gray-200',
            'active:dark:koupr-bg-gray-700',
          )}
          onClick={() => {
            setIsCollapsed(!isCollapsed)
            setIsTouched(true)
            localStorage.setItem(
              localStorageCollapsedKey,
              JSON.stringify(!isCollapsed),
            )
          }}
        >
          {isCollapsed ? <IconChevronRight /> : <IconChevronLeft />}
        </div>
      </div>
    </SidenavContext.Provider>
  )
}
