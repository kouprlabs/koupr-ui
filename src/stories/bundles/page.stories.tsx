import { useEffect } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { List } from '../common/list'
import { Page } from '../common/page'
import { Settings } from '../common/settings'

const meta: Meta<typeof Page> = {
  title: 'Bundles/Page',
  component: Page,
  render: () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
      if (location.pathname === '/') {
        navigate('/workspace/list')
      }
    }, [location.pathname, navigate])

    return (
      <Routes>
        <Route path="/workspace" element={<Page />}>
          <Route path="/workspace/list" element={<List />} />
          <Route path="/workspace/settings" element={<Settings />} />
        </Route>
      </Routes>
    )
  },
}

export default meta
type Story = StoryObj<typeof Page>

export const Default: Story = {}
