import {
  IconFlag,
  IconGroup,
  IconWorkspaces,
  Sidenav,
  SidenavItem,
  Logo,
} from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import {
  ParagraphGroups,
  ParagraphOrganizations,
  ParagraphWorkspaces,
} from '../common/paragraphs'

const meta: Meta<typeof Sidenav> = {
  title: 'Components/Sidenav',
  component: Sidenav,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Sidenav>

export const Default: Story = {
  args: {
    storage: { prefix: 'shell', namespace: 'main' },
    logo: <Logo type="koupr" size="sm" />,
  },
  render: (args) => {
    const location = useLocation()
    const navigateFn = useNavigate()

    return (
      <div className={cx('flex', 'flex-row', 'gap-0', 'h-full')}>
        <Sidenav {...args} navigateFn={navigateFn}>
          <SidenavItem
            href="/"
            icon={<IconWorkspaces />}
            primaryText="Workspaces"
            secondaryText="Isolated containers for files and folders."
            pathnameFn={() => location.pathname}
            navigateFn={navigateFn}
          />
          <SidenavItem
            href="/group"
            icon={<IconGroup />}
            primaryText="Groups"
            secondaryText="Allows assigning permissions to a group of users."
            pathnameFn={() => location.pathname}
            navigateFn={navigateFn}
          />
          <SidenavItem
            href="/organization"
            icon={<IconFlag />}
            primaryText="Organizations"
            secondaryText="Umbrellas for workspaces and users."
            pathnameFn={() => location.pathname}
            navigateFn={navigateFn}
          />
        </Sidenav>
        <div className={cx('px-2', 'pt-2')}>
          <Routes>
            <Route path="/" element={<ParagraphWorkspaces />} />
            <Route path="/group" element={<ParagraphGroups />} />
            <Route path="/organization" element={<ParagraphOrganizations />} />
          </Routes>
        </div>
      </div>
    )
  },
}
