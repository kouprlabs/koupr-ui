import { User } from '@/client/idp/user'
import { getPictureUrl } from '@/lib/helpers/picture'
import { Avatar } from '@chakra-ui/react'
import cx from 'classnames'

export type AccountMenuAvatarImageProps = {
  user: User
}

export const AccountMenuAvatarImage = ({
  user,
}: AccountMenuAvatarImageProps) => (
  <Avatar
    name={user.fullName}
    src={user.picture ? getPictureUrl(user.picture) : undefined}
    size="sm"
    className={cx(
      'w-[40px]',
      'h-[40px]',
      'border',
      'border-gray-300',
      'dark:border-gray-700',
    )}
  />
)
