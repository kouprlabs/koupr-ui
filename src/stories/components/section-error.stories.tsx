// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
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
