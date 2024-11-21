// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE.md file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
            <Route
              path="/"
              element={
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Duis
                  nascetur magnis morbi laoreet; montes porta. Pulvinar nunc per
                  accumsan sed suspendisse sit sapien. Venenatis maximus
                  inceptos taciti vestibulum porta sagittis quisque ipsum erat.
                  Risus sodales conubia leo facilisi dignissim potenti senectus.
                  Lectus feugiat ornare amet iaculis metus inceptos adipiscing
                  placerat. Vestibulum faucibus facilisis viverra magna litora.
                  Molestie lorem leo malesuada dictumst porta erat sagittis
                  ullamcorper sollicitudin. Hendrerit ante maximus tincidunt,
                  venenatis mauris molestie.
                </p>
              }
            />
            <Route
              path="/group"
              element={
                <p>
                  Commodo volutpat facilisis habitant; mattis ultrices mauris ex
                  nisi. Consequat nascetur lacus sed fames convallis pretium sit
                  justo. Gravida curabitur condimentum hac mi, ridiculus montes.
                  Eros commodo porttitor erat amet primis imperdiet. Morbi at
                  potenti volutpat litora viverra dapibus sapien. Fermentum
                  sodales nullam aliquam fusce aliquam.
                </p>
              }
            />
            <Route
              path="/organization"
              element={
                <p>
                  Dis eros primis condimentum a porttitor orci curabitur.
                  Aluctus arcu blandit dui facilisi interdum pretium tristique.
                  Cras nam congue parturient posuere tempor lectus? Felis
                  hendrerit penatibus semper maximus convallis tortor. Et
                  potenti quisque ex phasellus magnis leo netus. Hac enim ante
                  curae odio libero feugiat metus conubia tincidunt.
                </p>
              }
            />
          </Routes>
        </div>
      </div>
    )
  },
}
