import InvitationAPI from '@/client/api/invitation'
import { User } from '@/client/idp/user'
import { swrConfig } from '@/client/options'
import { getPictureUrl } from '@/lib/helpers/picture'
import { useAppSelector } from '@/store/hook'
import { NavType } from '@/store/ui/nav'
import { Avatar } from '@chakra-ui/react'
import { forwardRef } from '@chakra-ui/system'
import cx from 'classnames'
import { NotificationBadge } from '../notification-badge'
import { AccountMenuActiveCircle } from './account-menu-active-circle'

export type AccountMenuAvatarButtonProps = {
  user: User
}

export const AccountMenuAvatarButton = forwardRef<
  AccountMenuAvatarButtonProps,
  'div'
>(({ user, ...props }, ref) => {
  const activeNav = useAppSelector((state) => state.ui.nav.active)
  const { data: count } = InvitationAPI.useGetIncomingCount(swrConfig())
  const isActive = activeNav === NavType.Account

  return (
    <div ref={ref} {...props} className={cx('cursor-pointer')}>
      <AccountMenuActiveCircle>
        <NotificationBadge hasBadge={Boolean(count && count > 0)}>
          <Avatar
            name={user.fullName}
            src={user.picture ? getPictureUrl(user.picture) : undefined}
            size="sm"
            className={cx('w-[40px]', 'h-[40px]', 'border', 'border-gray-300', {
              'dark:border-gray-700': !isActive,
            })}
          />
        </NotificationBadge>
      </AccountMenuActiveCircle>
    </div>
  )
})
