// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { IconButton, Progress, Switch } from '@chakra-ui/react'
import { Form, IconEdit, IconDelete } from '@koupr/ui'
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
            <Progress value={20} hasStripe />
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
                  icon={<IconEdit />}
                  className={cx('h-[40px]', 'w-[40px]')}
                  title="Edit full name"
                  aria-label="Edit full name"
                />
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
                  icon={<IconEdit />}
                  className={cx('h-[40px]', 'w-[40px]')}
                  title="Edit email"
                  aria-label="Edit email"
                />
              </>
            ),
          },
          {
            label: 'Password',
            content: (
              <IconButton
                icon={<IconEdit />}
                className={cx('h-[40px]', 'w-[40px]')}
                title="Change password"
                aria-label="Change password"
              />
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
                icon={<IconDelete />}
                variant="solid"
                colorScheme="red"
                title="Delete account"
                aria-label="Delete account"
              />
            ),
          },
        ],
      },
    ],
  },
}
