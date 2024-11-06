import { Select } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    options: [
      { value: 'viewer', label: 'Viewer' },
      { value: 'editor', label: 'Editor' },
      { value: 'owner', label: 'Owner' },
    ],
    placeholder: 'Select Permission',
    selectedOptionStyle: 'check',
  },
  render: (args) => (
    <div className={cx('inline-block', 'w-[250px]')}>
      <Select {...args} />
    </div>
  ),
}
