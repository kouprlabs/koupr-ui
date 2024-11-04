import { useEffect } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Layout } from '../common/layout'
import { List } from '../common/list'
import { Page } from '../common/page'
import { Settings } from '../common/settings'

export const App = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/workspace') {
      navigate('/workspace/list')
    }
  }, [location.pathname, navigate])

  return (
    <Layout>
      <Routes>
        <Route
          path="/workspace"
          element={<Page />}
          children={
            <>
              <Route path="/workspace/list" element={<List />} />
              <Route path="/workspace/settings" element={<Settings />} />
            </>
          }
        />
      </Routes>
    </Layout>
  )
}

const meta: Meta<typeof App> = {
  title: 'Bundles/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: /App/,
}

export default meta
type Story = StoryObj<typeof App>

export const Default: Story = {}
