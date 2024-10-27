import { ReactElement, useContext, useEffect, useState } from 'react'
import { Tooltip, Link } from '@chakra-ui/react'
import cx from 'classnames'
import { DrawerContext } from './drawer-context'

export type DrawerItemProps = {
  icon: ReactElement
  href: string
  primaryText: string
  secondaryText: string
  isActive?: boolean
  pathnameFn: () => string
  navigateFn: (href: string) => void
}

export const DrawerItem = ({
  icon,
  href,
  primaryText,
  secondaryText,
  pathnameFn,
  navigateFn,
}: DrawerItemProps) => {
  const pathname = pathnameFn()
  const [isActive, setIsActive] = useState<boolean>()
  const { isCollapsed } = useContext(DrawerContext)

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
      className={cx('w-full', 'no-underline')}
      onClick={() => navigateFn(href)}
    >
      <Tooltip label={primaryText} isDisabled={!isCollapsed}>
        <div
          className={cx(
            'flex',
            'flex-row',
            'items-center',
            'gap-1.5',
            'p-1.5',
            'rounded-md',
            {
              'bg-black': isActive,
              'dark:bg-white': isActive,
            },
            {
              'hover:bg-gray-100': !isActive,
              'dark:hover:bg-gray-600': !isActive,
            },
            {
              'hover:bg-gray-200': !isActive,
              'dark:hover:bg-gray-700': !isActive,
            },
          )}
        >
          <div
            className={cx(
              'flex',
              'items-center',
              'justify-center',
              'shrink-0',
              'w-[21px]',
              'h-[21px]',
              {
                'text-white': isActive,
                'dark:text-gray-800': isActive,
              },
            )}
          >
            {icon}
          </div>
          {!isCollapsed ? (
            <span
              className={cx({
                'text-white': isActive,
                'dark:text-gray-800': isActive,
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
