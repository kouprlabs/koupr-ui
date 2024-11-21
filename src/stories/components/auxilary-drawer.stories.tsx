// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
