// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ReactElement } from 'react'
import { IconButton } from '@chakra-ui/react'
import cx from 'classnames'
import { NotificationBadge } from '../components/notification-badge'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'

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
}: AuxiliaryDrawerProps) => (
  <>
    <DrawerRoot
      open={isOpen}
      placement="end"
      size="sm"
      onOpenChange={({ open }) => {
        if (!open) {
          onClose()
        }
      }}
    >
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <NotificationBadge hasBadge={hasBadge}>
          <IconButton aria-label={header} onClick={onOpen}>
            {icon}
          </IconButton>
        </NotificationBadge>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerCloseTrigger />
        <DrawerHeader>
          <DrawerTitle>{header}</DrawerTitle>
        </DrawerHeader>
        <DrawerBody className={cx('koupr-p-2')}>{body}</DrawerBody>
        <DrawerFooter>{footer}</DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  </>
)
