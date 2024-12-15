// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactElement, useContext, useEffect, useState } from 'react'
import { Link } from '@chakra-ui/react'
import cx from 'classnames'
import { Tooltip } from '../ui/tooltip'
import { SidenavContext } from './sidenav-context'

export type SidenavItemProps = {
  icon: ReactElement
  href: string
  primaryText: string
  secondaryText: string
  pathnameFn?: () => string
  navigateFn?: (href: string) => void
}

export const SidenavItem = ({
  icon,
  href,
  primaryText,
  secondaryText,
  pathnameFn,
  navigateFn,
}: SidenavItemProps) => {
  const pathname = pathnameFn?.() ?? ''
  const [isActive, setIsActive] = useState<boolean>()
  const { isCollapsed } = useContext(SidenavContext)

  useEffect(() => {
    if (
      (href === '/' && pathname === '/') ||
      (href !== '/' && pathname.startsWith(href))
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [pathname, href])

  return (
    <Link
      title={isCollapsed ? `${primaryText}: ${secondaryText}` : secondaryText}
      className={cx('koupr-w-full', 'koupr-no-underline')}
      onClick={() => navigateFn?.(href)}
    >
      <Tooltip content={primaryText} disabled={!isCollapsed}>
        <div
          className={cx(
            'koupr-flex',
            'koupr-flex-row',
            'koupr-items-center',
            'koupr-gap-1.5',
            'koupr-p-1.5',
            'koupr-rounded-md',
            {
              'koupr-bg-black': isActive,
              'dark:koupr-bg-white': isActive,
            },
            {
              'hover:koupr-bg-gray-100': !isActive,
              'dark:hover:koupr-bg-gray-600': !isActive,
            },
            {
              'hover:koupr-bg-gray-200': !isActive,
              'dark:hover:koupr-bg-gray-700': !isActive,
            },
          )}
        >
          <div
            className={cx(
              'koupr-flex',
              'koupr-items-center',
              'koupr-justify-center',
              'koupr-shrink-0',
              'koupr-w-[21px]',
              'koupr-h-[21px]',
              {
                'koupr-text-white': isActive,
                'dark:koupr-text-gray-800': isActive,
              },
            )}
          >
            {icon}
          </div>
          {!isCollapsed ? (
            <span
              className={cx({
                'koupr-text-white': isActive,
                'dark:koupr-text-gray-800': isActive,
              })}
            >
              {primaryText}
            </span>
          ) : null}
        </div>
      </Tooltip>
    </Link>
  )
}
