// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
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
