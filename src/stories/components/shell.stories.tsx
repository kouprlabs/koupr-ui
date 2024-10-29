import { Meta, StoryObj } from '@storybook/react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  IconFlag,
  IconGroup,
  IconWorkspaces,
  Logo,
  Shell,
} from '../../components'

const meta: Meta<typeof Shell> = {
  title: 'Components/Shell',
  component: Shell,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Shell>

export const Default: Story = {
  args: {
    storage: { prefix: 'shell', namespace: 'main' },
    logo: <Logo type="koupr" size="sm" />,
    items: [
      {
        href: '/',
        icon: <IconWorkspaces />,
        primaryText: 'Workspaces',
        secondaryText: 'Isolated containers for files and folders.',
      },
      {
        href: '/group',
        icon: <IconGroup />,
        primaryText: 'Groups',
        secondaryText: 'Allows assigning permissions to a group of users.',
      },
      {
        href: '/organizations',
        icon: <IconFlag />,
        primaryText: 'Organizations',
        secondaryText: 'Umbrellas for workspaces and users.',
      },
    ],
  },
  render: (args) => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
      <Shell
        {...args}
        pathnameFn={() => location.pathname}
        navigateFn={(href: string) => navigate(href)}
      />
    )
  },
}
