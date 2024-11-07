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
