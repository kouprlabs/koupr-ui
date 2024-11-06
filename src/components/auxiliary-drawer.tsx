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
import { NotificationBadge } from '../components/notification-badge'

export type AuxiliaryDrawerProps = {
  icon: ReactElement
  body?: ReactElement
  footer?: ReactElement
  hasBadge?: boolean
  header: string
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

export const AuxiliaryDrawer = ({
  icon,
  body,
  footer,
  header,
  hasBadge,
  isOpen,
  onOpen,
  onClose,
}: AuxiliaryDrawerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <>
      <NotificationBadge hasBadge={hasBadge}>
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
          <DrawerBody className={cx('koupr-p-2')}>{body}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
