// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { useEffect } from 'react'
import { NavBar } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

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
        href: '/workspace',
        title: 'Workspaces',
      },
      {
        href: '/group',
        title: 'Groups',
      },
      {
        href: '/organization',
        title: 'Organizations',
      },
    ],
  },
  render: (args) => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
      if (location.pathname === '/') {
        navigate('/workspace')
      }
    }, [location.pathname, navigate])

    return (
      <div className={cx('flex', 'flex-col', 'gap-2')}>
        <NavBar
          {...args}
          pathnameFn={() => location.pathname}
          navigateFn={navigate}
        />
        <Routes>
          <Route
            path="/workspace"
            element={
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Duis
                nascetur magnis morbi laoreet; montes porta. Pulvinar nunc per
                accumsan sed suspendisse sit sapien. Venenatis maximus inceptos
                taciti vestibulum porta sagittis quisque ipsum erat. Risus
                sodales conubia leo facilisi dignissim potenti senectus. Lectus
                feugiat ornare amet iaculis metus inceptos adipiscing placerat.
                Vestibulum faucibus facilisis viverra magna litora. Molestie
                lorem leo malesuada dictumst porta erat sagittis ullamcorper
                sollicitudin. Hendrerit ante maximus tincidunt, venenatis mauris
                molestie.
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
                Dis eros primis condimentum a porttitor orci curabitur. Aluctus
                arcu blandit dui facilisi interdum pretium tristique. Cras nam
                congue parturient posuere tempor lectus? Felis hendrerit
                penatibus semper maximus convallis tortor. Et potenti quisque ex
                phasellus magnis leo netus. Hac enim ante curae odio libero
                feugiat metus conubia tincidunt.
              </p>
            }
          />
        </Routes>
      </div>
    )
  },
}
