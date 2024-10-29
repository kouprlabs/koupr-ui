import { useEffect, useState } from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import cx from 'classnames'

export type NavBarProps = {
  items: NavItem[]
  pathnameFn: () => string
  navigateFn: (href: string) => void
}

export type NavItem = {
  title: string
  href: string
  isActive?: boolean
}

export const NavBar = ({ items, pathnameFn, navigateFn }: NavBarProps) => {
  return (
    <div className={cx('flex', 'flex-row', 'gap-1.5')}>
      {items
        ? items.map((item, index) => (
            <Item
              key={index}
              title={item.title}
              href={item.href}
              pathnameFn={pathnameFn}
              navigateFn={navigateFn}
            />
          ))
        : null}
    </div>
  )
}

type ItemProps = {
  title: string
  href: string
  pathnameFn: () => string
  navigateFn: (href: string) => void
}

const Item = ({ title, href, pathnameFn, navigateFn }: ItemProps) => {
  const pathname = pathnameFn()
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
        'flex',
        'items-center',
        'opacity-100',
        'hover:opacity-80',
        'h-[40px]',
        'rounded-xl',
        'pt-0',
        'pr-[20px]',
        'pb-0',
        'pl-[20px]',
        'font-semibold',
        {
          'text-white': isActive,
          'dark:text-gray-600': isActive,
          'bg-black': isActive,
          'dark:bg-white': isActive,
          'bg-transparent': !isActive,
        },
      )}
      onClick={() => navigateFn(href)}
    >
      {title}
    </ChakraLink>
  )
}
