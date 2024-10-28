import { Link as ChakraLink } from '@chakra-ui/react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

export type NavigationItemProps = {
  title: string
  href: string
  isActive: boolean
}

export const NavigationItem = ({
  title,
  href,
  isActive,
}: NavigationItemProps) => (
  <ChakraLink
    as={Link}
    to={href}
    lineHeight="40px"
    variant="no-underline"
    className={cx(
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
  >
    {title}
  </ChakraLink>
)
