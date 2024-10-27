import { ReactElement, useRef } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
} from '@chakra-ui/react'
import cx from 'classnames'
import { NotificationBadge } from './notification-badge'

export type AppDrawerProps = {
  icon: ReactElement
  header: string
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

export const AppDrawer = ({
  icon,
  header,
  isOpen,
  onOpen,
  onClose,
}: AppDrawerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <>
      <NotificationBadge hasBadge={true}>
        <IconButton
          ref={buttonRef}
          icon={icon}
          aria-label={header}
          onClick={onOpen}
        />
      </NotificationBadge>
      <Drawer
        isOpen={isOpen}
        placement="right"
        size="sm"
        onClose={onClose}
        finalFocusRef={buttonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody className={cx('p-2')}></DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
