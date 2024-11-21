// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import React, { ReactNode, useEffect, useRef } from 'react'
import cx from 'classnames'

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode
  noOfLines?: number
  maxCharacters?: number
}

export const Text: React.FC<TextProps> = ({
  children,
  noOfLines,
  maxCharacters,
  className,
  ...props
}: TextProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = children?.toString() || ''
    if (ref.current && maxCharacters && text.length > maxCharacters) {
      ref.current.textContent = text.slice(0, maxCharacters).trim() + '…'
    }
  }, [children, maxCharacters])

  return (
    <span
      {...props}
      ref={ref}
      style={{
        display: noOfLines !== undefined ? '-webkit-box' : undefined,
        WebkitBoxOrient: noOfLines !== undefined ? 'vertical' : undefined,
        WebkitLineClamp: noOfLines,
      }}
      className={cx(
        { 'koupr-whitespace-nowrap': maxCharacters !== undefined },
        {
          'koupr-overflow-hidden':
            noOfLines !== undefined || maxCharacters !== undefined,
        },
        className,
      )}
    >
      {children}
    </span>
  )
}
