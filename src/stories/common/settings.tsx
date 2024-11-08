import { IconButton, Progress, Switch } from '@chakra-ui/react'
import { Form, IconDelete, IconEdit } from '@koupr/ui'
import cx from 'classnames'

export const Settings = () => (
  <Form
    sections={[
      {
        title: 'Storage',
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
    ]}
  />
)
