// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactNode, useMemo } from 'react'
import cx from 'classnames'
import { useTheme } from 'next-themes'
import { Tag } from './ui/tag'

export type TabTagProps = {
  children?: ReactNode
  className?: string
  isActive?: boolean
}

export const NumberTag = ({ isActive, className, children }: TabTagProps) => {
  const { theme } = useTheme()
  const bg = useMemo(() => {
    if (isActive) {
      if (theme === 'light') {
        return 'white'
      } else if (theme === 'dark') {
        return 'gray.800'
      }
    } else {
      if (theme === 'light') {
        return 'black'
      } else if (theme === 'dark') {
        return 'white'
      }
    }
  }, [isActive, theme])
  const color = useMemo(() => {
    if (isActive) {
      if (theme === 'light') {
        return 'black'
      } else if (theme === 'dark') {
        return 'white'
      }
    } else {
      if (theme === 'light') {
        return 'white'
      } else if (theme === 'dark') {
        return 'gray.800'
      }
    }
  }, [isActive, theme])

  return (
    <Tag className={cx('koupr-rounded-full', className)} color={color} bg={bg}>
      {children}
    </Tag>
  )
}
