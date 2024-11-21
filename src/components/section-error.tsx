// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import cx from 'classnames'
import { IconError } from './icons'

export type SectionErrorProps = {
  text: string
  height?: string
}

export const SectionError = ({ text, height = '300px' }: SectionErrorProps) => (
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
    <div className={cx('koupr-flex', 'koupr-items-center', 'koupr-gap-0.5')}>
      <IconError className={cx('koupr-text-red-500')} />
      <span className={cx('koupr-text-red-500')}>{text}</span>
    </div>
  </div>
)
