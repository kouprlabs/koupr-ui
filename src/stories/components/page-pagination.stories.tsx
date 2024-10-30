import { PagePagination, usePagePagination } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
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
      navigate,
      location,
      storage: {
        prefix: 'page-pagination',
        namespace: 'main',
      },
    })

    return (
      <PagePagination
        {...args}
        page={page}
        size={size}
        steps={steps}
        setPage={setPage}
        setSize={setSize}
      />
    )
  },
}
