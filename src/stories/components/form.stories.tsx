// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { IconButton } from '@chakra-ui/react'
import { Form, IconEdit, IconDelete, ProgressRoot, Switch } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
}

export default meta
type Story = StoryObj<typeof Form>

export const Default: Story = {
  args: {
    sections: [
      {
        title: 'Storage Usage',
        content: (
          <>
            <span>5.67 GB of 38 GB used</span>
            <ProgressRoot value={20} />
          </>
        ),
      },
      {
        title: 'Basics',
        rows: [
          {
            label: 'Full name',
            content: (
              <>
                <span>Bruce Wayne</span>
                <IconButton
                  className={cx('h-[40px]', 'w-[40px]')}
                  title="Edit full name"
                  aria-label="Edit full name"
                >
                  <IconEdit />
                </IconButton>
              </>
            ),
          },
        ],
      },
      {
        title: 'Credentials',
        rows: [
          {
            label: 'Email',
            content: (
              <>
                <span>bruce.wayne@koupr.com</span>
                <IconButton
                  className={cx('h-[40px]', 'w-[40px]')}
                  title="Edit email"
                  aria-label="Edit email"
                >
                  <IconEdit />
                </IconButton>
              </>
            ),
          },
          {
            label: 'Password',
            content: (
              <IconButton
                className={cx('h-[40px]', 'w-[40px]')}
                title="Change password"
                aria-label="Change password"
              >
                <IconEdit />
              </IconButton>
            ),
          },
        ],
      },
      {
        title: 'Theme',
        rows: [
          {
            label: 'Dark mode',
            content: <Switch />,
          },
        ],
      },
      {
        title: 'Advanced',
        rows: [
          {
            label: 'Delete account',
            content: (
              <IconButton
                variant="solid"
                colorPalette="red"
                title="Delete account"
                aria-label="Delete account"
              >
                <IconDelete />
              </IconButton>
            ),
          },
        ],
      },
    ],
  },
}
