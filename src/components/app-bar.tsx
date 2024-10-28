import { ReactElement } from 'react'
import cx from 'classnames'

export type AppBarProps = {
  bar: ReactElement
  buttons: ReactElement
}

export const AppBar = ({ bar, buttons }: AppBarProps) => (
  <div
    className={cx(
      'flex',
      'flex-row',
      'items-center',
      'gap-2',
      'shrink-0',
      'p-1.5',
      'w-full',
    )}
  >
    <div className={cx('grow')}>{bar}</div>
    <div className={cx('flex', 'flex-row', 'items-center', 'gap-1.5')}>
      {buttons}
    </div>
  </div>
)
