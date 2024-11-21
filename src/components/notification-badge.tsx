// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE.md file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
    <div
      className={cx(
        'koupr-flex',
        'koupr-items-center',
        'koupr-justify-center',
        'koupr-relative',
      )}
    >
      {children}
      {hasBadge ? (
        <Circle size="10px" bg="red" position="absolute" top={0} right={0} />
      ) : null}
    </div>
  )
}
