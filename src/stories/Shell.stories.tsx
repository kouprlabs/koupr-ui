import type { StoryObj } from '@storybook/react'
import cx from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconFlag, IconGroup, IconWorkspaces, Shell, Logo } from '../components'

const meta = {
  title: 'Components/Shell',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
      <Shell
        storage={{ prefix: 'voltaserve', namespace: 'main' }}
        logo={
          <div className={cx('w-[16px]')}>
            <Logo />
          </div>
        }
        topBar={<></>}
        items={[
          {
            href: '/workspace',
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
        ]}
        pathnameFn={() => location.pathname}
        navigateFn={(href: string) => navigate(href)}
      ></Shell>
    )
  },
}
