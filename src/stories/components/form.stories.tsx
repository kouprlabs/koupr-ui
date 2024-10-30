import { IconButton, Switch } from '@chakra-ui/react'
// @ts-expect-error ignored
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
                  aria-label="Edit"
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
                  aria-label="Edit"
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
                aria-label="Edit"
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
                aria-label="Delete account"
              />
            ),
          },
        ],
      },
    ],
  },
}
