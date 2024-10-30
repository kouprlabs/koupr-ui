import { useDisclosure } from '@chakra-ui/react'
// @ts-expect-error ignored
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
