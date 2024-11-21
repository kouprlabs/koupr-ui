// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { NumberTag } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NumberTag> = {
  title: 'Components/Number Tag',
  component: NumberTag,
}

export default meta
type Story = StoryObj<typeof NumberTag>

export const Default: Story = {
  args: {
    children: '1',
  },
}
