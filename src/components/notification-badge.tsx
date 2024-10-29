import { ReactNode } from 'react'
import { Circle } from '@chakra-ui/react'
import cx from 'classnames'

export type NotificationBadgeProps = {
  hasBadge?: boolean
  children?: ReactNode
}

export const NotificationBadge = ({
  hasBadge,
  children,
}: NotificationBadgeProps) => {
  return (
    <div className={cx('inline-block')}>
      <div className={cx('flex', 'items-center', 'justify-center', 'relative')}>
        {children}
        {hasBadge ? (
          <Circle size="10px" bg="red" position="absolute" top={0} right={0} />
        ) : null}
      </div>
    </div>
  )
}
