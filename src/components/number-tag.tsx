// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
