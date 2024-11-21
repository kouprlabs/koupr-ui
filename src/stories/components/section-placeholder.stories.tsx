// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { Button } from '@chakra-ui/react'
import { SectionPlaceholder, IconPersonAdd } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SectionPlaceholder> = {
  title: 'Components/Section Placeholder',
  component: SectionPlaceholder,
}

export default meta
type Story = StoryObj<typeof SectionPlaceholder>

export const Default: Story = {
  args: {
    text: 'This organization has no invitations.',
    content: <Button leftIcon={<IconPersonAdd />}>Invite Members</Button>,
  },
}
