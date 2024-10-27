import InvitationAPI from '@/client/api/invitation'
import UserAPI from '@/client/idp/user'
import { swrConfig } from '@/client/options'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  SkeletonCircle,
} from '@chakra-ui/react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { truncateEnd, truncateMiddle } from '../../helpers'
import { NumberTag } from '../number-tag'
import { AccountMenuActiveCircle } from './account-menu-active-circle'
import { AccountMenuAvatarButton } from './account-menu-avatar-button'
import { AccountMenuAvatarImage } from './account-menu-avatar-image'

export const AccountMenu = () => {
  const { data: user } = UserAPI.useGet(swrConfig())
  const { data: invitationCount } =
    InvitationAPI.useGetIncomingCount(swrConfig())

  if (user) {
    return (
      <Menu>
        <MenuButton as={AccountMenuAvatarButton} user={user} />
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
              <AccountMenuAvatarImage user={user} />
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
                  {truncateEnd(user.fullName, 50)}
                </span>
                <span className={cx('text-gray-500')}>
                  {truncateMiddle(user.email, 50)}
                </span>
              </div>
            </div>
            <MenuDivider />
            <MenuItem as={Link} to="/account/settings">
              Settings
            </MenuItem>
            <MenuItem as={Link} to="/account/invitation">
              <div className={cx('flex', 'flex-row', 'items-center', 'gap-1')}>
                <span>Invitations</span>
                {invitationCount && invitationCount > 0 ? (
                  <NumberTag>{invitationCount}</NumberTag>
                ) : null}
              </div>
            </MenuItem>
            <MenuItem as={Link} to="/sign-out" className={cx('text-red-500')}>
              Sign Out
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    )
  } else {
    return (
      <AccountMenuActiveCircle>
        <SkeletonCircle size="40px" />
      </AccountMenuActiveCircle>
    )
  }
}
