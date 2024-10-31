import cx from 'classnames'
import { IconError } from './icons'

export type SectionErrorProps = {
  text: string
  height?: string
}

export const SectionError = ({ text, height = '300px' }: SectionErrorProps) => (
  <div
    className={cx('flex', 'items-center', 'justify-center', 'w-full', 'grow')}
    style={{ height }}
  >
    <div className={cx('flex', 'items-center', 'gap-0.5')}>
      <IconError className={cx('text-red-500')} />
      <span className={cx('text-red-500')}>{text}</span>
    </div>
  </div>
)
