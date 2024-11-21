// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import cx from 'classnames'
import { Spinner } from './spinner'

export type SectionSpinnerProps = {
  height?: string
}

export const SectionSpinner = ({ height = '300px' }: SectionSpinnerProps) => (
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
    <Spinner />
  </div>
)
