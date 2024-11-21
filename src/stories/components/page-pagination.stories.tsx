// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { PagePagination, usePagePagination } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'

const meta: Meta<typeof PagePagination> = {
  title: 'Components/Page Pagination',
  component: PagePagination,
}

export default meta
type Story = StoryObj<typeof PagePagination>

export const Default: Story = {
  args: {
    totalElements: 100,
    totalPages: 20,
  },
  render: (args) => {
    const location = useLocation()
    const navigate = useNavigate()
    const { page, size, steps, setPage, setSize } = usePagePagination({
      navigateFn: navigate,
      searchFn: () => location.search,
      storage: {
        prefix: 'page-pagination',
        namespace: 'main',
      },
    })

    return (
      <div className={cx('inline-block')}>
        <PagePagination
          {...args}
          page={page}
          size={size}
          steps={steps}
          setPage={setPage}
          setSize={setSize}
        />
      </div>
    )
  },
}
