// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { SectionSpinner } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SectionSpinner> = {
  title: 'Components/Section Spinner',
  component: SectionSpinner,
}

export default meta
type Story = StoryObj<typeof SectionSpinner>

export const Default: Story = {}
