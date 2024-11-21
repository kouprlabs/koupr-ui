// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
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
