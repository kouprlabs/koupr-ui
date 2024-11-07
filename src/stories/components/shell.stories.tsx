import { IconFlag, IconGroup, IconWorkspaces, Logo, Shell } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'
import {
  ParagraphGroups,
  ParagraphOrganizations,
  ParagraphWorkspaces,
} from '../common/paragraphs'

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
        href: '/organization',
        icon: <IconFlag />,
        primaryText: 'Organizations',
        secondaryText: 'Umbrellas for workspaces and users.',
      },
    ],
    children: <></>,
  },
  render: (args) => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
      <Shell
        {...args}
        pathnameFn={() => location.pathname}
        navigateFn={(href: string) => navigate(href)}
      >
        <Routes>
          <Route path="/" element={<ParagraphWorkspaces />} />
          <Route path="/group" element={<ParagraphGroups />} />
          <Route path="/organization" element={<ParagraphOrganizations />} />
        </Routes>
      </Shell>
    )
  },
}
