// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
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
