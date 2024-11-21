// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { Logo } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
}

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    type: 'voltaserve',
    size: 'sm',
  },
}
