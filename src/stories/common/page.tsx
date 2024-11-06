import { Tabs, TabList, Tab } from '@chakra-ui/react'
import cx from 'classnames'
import { Outlet, useNavigate } from 'react-router-dom'

export const Page = () => {
  const navigate = useNavigate()
  return (
    <div className={cx('flex', 'flex-col', 'gap-2')}>
      <Tabs variant="solid-rounded" colorScheme="gray">
        <TabList>
          <Tab onClick={() => navigate('/workspace/list')}>List</Tab>
          <Tab onClick={() => navigate('/workspace/settings')}>Settings</Tab>
        </TabList>
      </Tabs>
      <Outlet />
    </div>
  )
}
