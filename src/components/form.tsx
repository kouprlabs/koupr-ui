import { Fragment, ReactElement } from 'react'
import { Divider, Spacer } from '@chakra-ui/react'
import cx from 'classnames'

export type FormProps = {
  sections?: FormSection[]
}

export type FormSection = {
  title: string
  rows?: FormRow[]
}

export type FormRow = {
  label: string
  content?: ReactElement
}

export const Form = ({ sections }: FormProps) => (
  <div className={cx('flex', 'flex-col', 'gap-0')}>
    {sections?.map((section, sectionIndex) => (
      <Fragment key={`section-${sectionIndex}`}>
        <div className={cx('flex', 'flex-col', 'gap-1', 'py-1.5')}>
          <span className={cx('font-bold')}>{section.title}</span>
          {section.rows?.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={cx(
                'flex',
                'flex-row',
                'items-center',
                'gap-1',
                `h-[40px]`,
              )}
            >
              <span>{row.label}</span>
              <Spacer />
              {row.content}
            </div>
          ))}
        </div>
        {sectionIndex !== sections?.length - 1 ? <Divider /> : null}
      </Fragment>
    ))}
  </div>
)
