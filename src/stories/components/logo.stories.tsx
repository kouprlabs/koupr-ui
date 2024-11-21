// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
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
