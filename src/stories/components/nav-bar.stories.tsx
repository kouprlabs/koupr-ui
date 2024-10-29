import { Meta, StoryObj } from '@storybook/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavBar } from '../../components'

const meta: Meta<typeof NavBar> = {
  title: 'Components/Nav Bar',
  component: NavBar,
}

export default meta
type Story = StoryObj<typeof NavBar>

export const Default: Story = {
  args: {
    items: [
      {
        href: '/',
        title: 'Workspaces',
      },
      {
        href: '/group',
        title: 'Groups',
      },
      {
        href: '/organizations',
        title: 'Organizations',
      },
    ],
  },
  render: (args) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
      <NavBar
        {...args}
        pathnameFn={() => location.pathname}
        navigateFn={navigate}
      />
    )
  },
}
