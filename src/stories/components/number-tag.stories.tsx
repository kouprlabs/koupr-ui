// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
