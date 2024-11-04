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
    className={cx('flex', 'items-center', 'justify-center', 'w-full', 'grow')}
    style={{ height }}
  >
    <div className={cx('flex', 'flex-col', 'gap-1.5', 'items-center')}>
      <span>{text}</span>
      {content}
    </div>
  </div>
)
