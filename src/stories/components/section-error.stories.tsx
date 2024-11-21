// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
