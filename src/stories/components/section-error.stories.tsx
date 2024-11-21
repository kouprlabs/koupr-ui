// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { SectionError } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SectionError> = {
  title: 'Components/Section Error',
  component: SectionError,
}

export default meta
type Story = StoryObj<typeof SectionError>

export const Default: Story = {
  args: {
    text: 'Failed to load workspaces.',
  },
}
