import cx from 'classnames'
import { Spinner } from './spinner'

export type SectionSpinnerProps = {
  height?: string
}

export const SectionSpinner = ({ height = '300px' }: SectionSpinnerProps) => (
  <div
    className={cx('flex', 'items-center', 'justify-center', 'w-full', 'grow')}
    style={{ height }}
  >
    <Spinner />
  </div>
)
