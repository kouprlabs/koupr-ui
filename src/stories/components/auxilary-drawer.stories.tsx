// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { useDisclosure } from '@chakra-ui/react'
import { AuxiliaryDrawer, IconStacks } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AuxiliaryDrawer> = {
  title: 'Components/Auxiliary Drawer',
  component: AuxiliaryDrawer,
}

export default meta
type Story = StoryObj<typeof AuxiliaryDrawer>

export const Default: Story = {
  args: {
    icon: <IconStacks />,
    header: 'Tasks',
    body: <></>,
  },
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <AuxiliaryDrawer
        {...args}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    )
  },
}
