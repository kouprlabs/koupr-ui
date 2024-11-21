// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { Select } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import { OptionBase } from 'chakra-react-select'
import cx from 'classnames'

const meta: Meta<typeof Select<DemoOption, false>> = {
  title: 'Components/Select',
  component: Select<DemoOption, false>,
}

export default meta
type Story = StoryObj<typeof Select<DemoOption, false>>

interface DemoOption extends OptionBase {
  value: string
  label: string
}

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
      <Select<DemoOption, false>
        {...args}
        onChange={(newValue) => {
          if (newValue) {
            console.log(`Selected "${newValue.value}".`)
          }
        }}
      />
    </div>
  ),
}
