// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
