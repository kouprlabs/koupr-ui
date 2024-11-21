// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { SectionSpinner } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SectionSpinner> = {
  title: 'Components/Section Spinner',
  component: SectionSpinner,
}

export default meta
type Story = StoryObj<typeof SectionSpinner>

export const Default: Story = {}
