import { ReactElement } from 'react'
import cx from 'classnames'

export type AppBarProps = {
  bar?: ReactElement
  buttons?: ReactElement
}

export const AppBar = ({ bar, buttons }: AppBarProps) => (
  <div
    className={cx(
      'koupr-flex',
      'koupr-flex-row',
      'koupr-items-center',
      'koupr-gap-2',
      'koupr-shrink-0',
      'koupr-p-1.5',
      'koupr-w-full',
    )}
  >
    <div
      className={cx(
        'koupr-flex',
        'koupr-flex-row',
        'koupr-items-center',
        'koupr-gap-1.5',
        'koupr-grow',
      )}
    >
      {bar}
    </div>
    <div
      className={cx(
        'koupr-flex',
        'koupr-flex-row',
        'koupr-items-center',
        'koupr-gap-1.5',
      )}
    >
      {buttons}
    </div>
  </div>
)
