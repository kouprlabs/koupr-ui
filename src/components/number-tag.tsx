// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactNode, useMemo } from 'react'
import { Tag, useColorMode } from '@chakra-ui/react'
import cx from 'classnames'

export type TabTagProps = {
  children?: ReactNode
  className?: string
  isActive?: boolean
}

export const NumberTag = ({ isActive, className, children }: TabTagProps) => {
  const { colorMode } = useColorMode()
  const bg = useMemo(() => {
    if (isActive) {
      if (colorMode === 'light') {
        return 'white'
      } else if (colorMode === 'dark') {
        return 'gray.800'
      }
    } else {
      if (colorMode === 'light') {
        return 'black'
      } else if (colorMode === 'dark') {
        return 'white'
      }
    }
  }, [isActive, colorMode])
  const color = useMemo(() => {
    if (isActive) {
      if (colorMode === 'light') {
        return 'black'
      } else if (colorMode === 'dark') {
        return 'white'
      }
    } else {
      if (colorMode === 'light') {
        return 'white'
      } else if (colorMode === 'dark') {
        return 'gray.800'
      }
    }
  }, [isActive, colorMode])

  return (
    <Tag className={cx('koupr-rounded-full', className)} color={color} bg={bg}>
      {children}
    </Tag>
  )
}
