// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { ReactElement } from 'react'
import cx from 'classnames'

export type SectionPlaceholderProps = {
  text: string
  content?: ReactElement
  height?: string
}

export const SectionPlaceholder = ({
  text,
  content,
  height = '300px',
}: SectionPlaceholderProps) => (
  <div
    className={cx(
      'koupr-flex',
      'koupr-items-center',
      'koupr-justify-center',
      'koupr-w-full',
      'koupr-grow',
    )}
    style={{ height }}
  >
    <div
      className={cx(
        'koupr-flex',
        'koupr-flex-col',
        'koupr-gap-1.5',
        'koupr-items-center',
      )}
    >
      <span>{text}</span>
      {content}
    </div>
  </div>
)
