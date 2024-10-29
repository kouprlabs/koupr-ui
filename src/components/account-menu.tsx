import { ReactElement, ReactNode } from 'react'
import {
  Avatar,
  Circle,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Portal,
  SkeletonCircle,
} from '@chakra-ui/react'
import { forwardRef } from '@chakra-ui/system'
import cx from 'classnames'
import { truncateEnd, truncateMiddle } from '../helpers'
import variables from '../variables'
import { NotificationBadge } from './notification-badge'

export type AccountMenuProps = {
  name: string
  email: string
  picture?: string
  isActive?: boolean
  isLoading?: boolean
  hasBadge?: boolean
  menuItems: ReactElement
}

export const AccountMenu = ({
  name,
  email,
  picture,
  isLoading,
  isActive,
  hasBadge,
  menuItems,
}: AccountMenuProps) => {
  if (!isLoading) {
    return (
      <Menu>
        <MenuButton
          as={AvatarButton}
          name={name}
          picture={picture}
          isActive={isActive}
          hasBadge={hasBadge}
        />
        <Portal>
          <MenuList>
            <div
              className={cx(
                'flex',
                'flex-row',
                'items-center',
                'gap-0.5',
                'px-1',
              )}
            >
              <Avatar
                name={name}
                src={picture}
                size="sm"
                className={cx(
                  'w-[40px]',
                  'h-[40px]',
                  'border',
                  'border-gray-300',
                  'dark:border-gray-700',
                )}
              />
              <div className={cx('flex', 'flex-col', 'gap-0')}>
                <span
                  className={cx(
                    'font-semibold',
                    'grow',
                    'text-ellipsis',
                    'overflow-hidden',
                    'whitespace-nowrap',
                  )}
                >
                  {truncateEnd(name, 50)}
                </span>
                <span className={cx('text-gray-500')}>
                  {truncateMiddle(email, 50)}
                </span>
              </div>
            </div>
            <MenuDivider />
            {menuItems}
          </MenuList>
        </Portal>
      </Menu>
    )
  } else {
    return (
      <ActiveCircle>
        <SkeletonCircle size="40px" />
      </ActiveCircle>
    )
  }
}

type ActiveCircleProps = {
  isActive?: boolean
  children?: ReactNode
}

const ActiveCircle = ({ isActive, children }: ActiveCircleProps) => (
  <Circle
    className={cx('w-[50px]', 'h-[50px]')}
    bg={isActive ? variables.gradiant : 'transparent'}
  >
    {children}
  </Circle>
)

type AvatarButtonProps = {
  name?: string
  picture?: string
  isActive?: boolean
  hasBadge?: boolean
}

const AvatarButton = forwardRef<AvatarButtonProps, 'div'>(
  ({ name, picture, isActive, hasBadge, ...props }, ref) => (
    <div ref={ref} {...props} className={cx('cursor-pointer')}>
      <ActiveCircle isActive={isActive}>
        <NotificationBadge hasBadge={hasBadge}>
          <Avatar
            name={name}
            src={picture}
            size="sm"
            className={cx('w-[40px]', 'h-[40px]', 'border', 'border-gray-300', {
              'dark:border-gray-700': !isActive,
            })}
          />
        </NotificationBadge>
      </ActiveCircle>
    </div>
  ),
)
