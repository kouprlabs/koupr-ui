// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { SectionSpinner } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SectionSpinner> = {
  title: 'Components/Section Spinner',
  component: SectionSpinner,
}

export default meta
type Story = StoryObj<typeof SectionSpinner>

export const Default: Story = {}
