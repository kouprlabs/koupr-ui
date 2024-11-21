// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { useEffect, useState } from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import cx from 'classnames'

export type NavBarProps = {
  items?: NavItem[]
  pathnameFn?: () => string
  navigateFn?: (href: string) => void
}

export type NavItem = {
  title: string
  href: string
}

export const NavBar = ({ items, pathnameFn, navigateFn }: NavBarProps) => {
  return (
    <div className={cx('koupr-flex', 'koupr-flex-row', 'koupr-gap-0')}>
      {items?.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          href={item.href}
          pathnameFn={pathnameFn}
          navigateFn={navigateFn}
        />
      ))}
    </div>
  )
}

type ItemProps = {
  title: string
  href: string
  pathnameFn?: () => string
  navigateFn?: (href: string) => void
}

const Item = ({ title, href, pathnameFn, navigateFn }: ItemProps) => {
  const pathname = pathnameFn?.() ?? ''
  const [isActive, setIsActive] = useState(false)

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
    <ChakraLink
      variant="no-underline"
      className={cx(
        'koupr-flex',
        'koupr-items-center',
        'koupr-opacity-100',
        'hover:koupr-opacity-80',
        'koupr-h-[40px]',
        'koupr-rounded-xl',
        'koupr-pt-0',
        'koupr-pr-[20px]',
        'koupr-pb-0',
        'koupr-pl-[20px]',
        'koupr-font-semibold',
        {
          'koupr-text-white': isActive,
          'dark:koupr-text-gray-600': isActive,
          'koupr-bg-black': isActive,
          'dark:koupr-bg-white': isActive,
          'koupr-bg-transparent': !isActive,
        },
      )}
      onClick={() => navigateFn?.(href)}
    >
      {title}
    </ChakraLink>
  )
}
