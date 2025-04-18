// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { IconFlag, IconGroup, IconWorkspaces, Logo, Shell } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'

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
      },
      {
        href: '/group',
        icon: <IconGroup />,
        primaryText: 'Groups',
      },
      {
        href: '/organization',
        icon: <IconFlag />,
        primaryText: 'Organizations',
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
          <Route
            path="/"
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
      </Shell>
    )
  },
}
