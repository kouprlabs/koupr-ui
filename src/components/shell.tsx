import { ReactElement } from 'react'
import { Stack } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { StorageOptions } from '../types'
import { variables } from '../variables'
import { Drawer, DrawerItem } from './drawer'

type ShellItem = {
  href: string
  icon: ReactElement
  primaryText: string
  secondaryText: string
}

type ShellProps = {
  storage?: StorageOptions
  logo: ReactElement
  topBar: ReactElement
  items: ShellItem[]
  children?: ReactElement
}

export const Shell = ({
  logo,
  topBar,
  items,
  storage,
  children,
}: ShellProps) => (
  <Stack direction="row" spacing={0} h="100%">
    <Drawer storage={storage} logo={logo}>
      {items.map((item, index) => (
        <DrawerItem
          key={index}
          href={item.href}
          icon={item.icon}
          primaryText={item.primaryText}
          secondaryText={item.secondaryText}
        />
      ))}
    </Drawer>
    <Flex direction="column" alignItems="center" h="100%" w="100%">
      {topBar}
      <Flex
        direction="column"
        width={{ base: 'full', '2xl': '1250px' }}
        px={variables.spacing2Xl}
        pt={variables.spacing2Xl}
        overflowY="auto"
        overflowX="hidden"
        flexGrow={1}
      >
        {children}
      </Flex>
    </Flex>
  </Stack>
)
