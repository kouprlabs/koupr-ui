// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactElement, ReactNode } from 'react'
import { Circle } from '@chakra-ui/react'
import cx from 'classnames'
import { truncateEnd, truncateMiddle } from '../helpers'
import { variables } from '../variables'
import { NotificationBadge } from './notification-badge'
import { Avatar } from './ui/avatar'
import { MenuRoot, MenuTrigger, MenuContent, MenuItemGroup } from './ui/menu'
import { SkeletonCircle } from './ui/skeleton'

export type AccountMenuProps = {
  name?: string
  email?: string
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
      <MenuRoot>
        <MenuTrigger asChild>
          <AvatarButton
            name={name}
            picture={picture}
            isActive={isActive}
            hasBadge={hasBadge}
          />
        </MenuTrigger>
        <MenuContent>
          <MenuItemGroup>
            <div
              className={cx(
                'koupr-flex',
                'koupr-flex-row',
                'koupr-items-center',
                'koupr-gap-0.5',
                'koupr-px-1',
              )}
            >
              <Avatar
                name={name}
                src={picture}
                size="sm"
                className={cx(
                  'koupr-w-[40px]',
                  'koupr-h-[40px]',
                  'koupr-border',
                  'koupr-border-gray-300',
                  'dark:koupr-border-gray-700',
                )}
              />
              <div
                className={cx('koupr-flex', 'koupr-flex-col', 'koupr-gap-0')}
              >
                {name ? (
                  <span
                    className={cx(
                      'koupr-font-semibold',
                      'koupr-grow',
                      'koupr-text-ellipsis',
                      'koupr-overflow-hidden',
                      'koupr-whitespace-nowrap',
                    )}
                  >
                    {truncateEnd(name, 50)}
                  </span>
                ) : null}
                {email ? (
                  <span className={cx('koupr-text-gray-500')}>
                    {truncateMiddle(email, 50)}
                  </span>
                ) : null}
              </div>
            </div>
          </MenuItemGroup>
          <MenuItemGroup>{menuItems}</MenuItemGroup>
        </MenuContent>
      </MenuRoot>
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
    className={cx('koupr-w-[50px]', 'koupr-h-[50px]')}
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

const AvatarButton = ({
  name,
  picture,
  isActive,
  hasBadge,
  ...props
}: AvatarButtonProps) => (
  <div {...props} className={cx('koupr-cursor-pointer')}>
    <ActiveCircle isActive={isActive}>
      <NotificationBadge hasBadge={hasBadge}>
        <Avatar
          name={name}
          src={picture}
          size="sm"
          className={cx(
            'koupr-w-[40px]',
            'koupr-h-[40px]',
            'koupr-border',
            'koupr-border-gray-300',
            {
              'dark:koupr-border-gray-700': !isActive,
            },
          )}
        />
      </NotificationBadge>
    </ActiveCircle>
  </div>
)
