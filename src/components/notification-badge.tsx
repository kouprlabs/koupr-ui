// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
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
