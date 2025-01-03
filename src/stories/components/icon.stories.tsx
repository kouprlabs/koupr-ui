// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import {
  IconAdd,
  IconAdminPanelSettings,
  IconArrowDownward,
  IconArrowTopRight,
  IconArrowUpward,
  IconBolt,
  IconChat,
  IconCheck,
  IconCheckBoxOutlineBlank,
  IconCheckCircle,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconClearAll,
  IconClose,
  IconCloudUpload,
  IconDatabase,
  IconDelete,
  IconDownload,
  IconEdit,
  IconError,
  IconExpandMore,
  IconFavorite,
  IconFileCopy,
  IconFirstPage,
  IconFlag,
  IconGridView,
  IconGroup,
  IconHistory,
  IconHome,
  IconHourglass,
  IconInfo,
  IconInvitations,
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
  IconKeyboardDoubleArrowLeft,
  IconKeyboardDoubleArrowRight,
  IconLastPage,
  IconLibraryAddCheck,
  IconList,
  IconLogout,
  IconModeHeat,
  IconMoreVert,
  IconNotifications,
  IconOpenInNew,
  IconPerson,
  IconPersonAdd,
  IconPlayArrow,
  IconRefresh,
  IconRemoveOperator,
  IconSchedule,
  IconSearch,
  IconSecurity,
  IconSelectCheckBox,
  IconSend,
  IconStacks,
  IconSwapVerticalCircle,
  IconSync,
  IconTune,
  IconUpload,
  IconVisibility,
  IconWarning,
  IconWhatshot,
  IconWorkspaces,
  IconRemoveModerator,
  IconFrontHand,
  IconHandshake,
  IconShield,
  IconThumbUp,
  IconThumbDown,
} from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'

const meta: Meta = {
  title: 'Components/Icon',
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className={cx('flex', 'flex-wrap', 'gap-1.5', 'w-[400px]')}>
      <IconPlayArrow />
      <IconUpload />
      <IconAdminPanelSettings />
      <IconDatabase />
      <IconRemoveOperator />
      <IconNotifications />
      <IconMoreVert />
      <IconLogout />
      <IconChevronLeft />
      <IconChevronRight />
      <IconChevronDown />
      <IconChevronUp />
      <IconAdd />
      <IconEdit />
      <IconGroup />
      <IconDownload />
      <IconArrowTopRight />
      <IconFileCopy />
      <IconDelete />
      <IconSend />
      <IconPersonAdd />
      <IconPerson />
      <IconCheck />
      <IconLibraryAddCheck />
      <IconSelectCheckBox />
      <IconCheckBoxOutlineBlank />
      <IconCheckCircle />
      <IconError />
      <IconWarning />
      <IconInvitations />
      <IconWorkspaces />
      <IconFlag />
      <IconClose />
      <IconSchedule />
      <IconClearAll />
      <IconOpenInNew />
      <IconInfo />
      <IconSearch />
      <IconRefresh />
      <IconSync />
      <IconGridView />
      <IconArrowUpward />
      <IconArrowDownward />
      <IconExpandMore />
      <IconList />
      <IconHourglass />
      <IconKeyboardArrowLeft />
      <IconKeyboardArrowRight />
      <IconKeyboardDoubleArrowRight />
      <IconKeyboardDoubleArrowLeft />
      <IconFirstPage />
      <IconLastPage />
      <IconHistory />
      <IconModeHeat />
      <IconSecurity />
      <IconVisibility />
      <IconTune />
      <IconHome />
      <IconStacks />
      <IconCloudUpload />
      <IconBolt />
      <IconChat />
      <IconFavorite />
      <IconWhatshot />
      <IconSwapVerticalCircle />
      <IconFrontHand />
      <IconHandshake />
      <IconRemoveModerator />
      <IconShield />
      <IconThumbUp />
      <IconThumbDown />
    </div>
  ),
}
