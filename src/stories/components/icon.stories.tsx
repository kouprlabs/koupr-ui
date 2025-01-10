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
  args: {
    filled: false,
  },
  argTypes: {
    filled: {
      control: 'boolean',
    },
  },
  render: (args) => (
    <div className={cx('flex', 'flex-wrap', 'gap-1.5', 'w-[400px]')}>
      <IconPlayArrow {...args} />
      <IconUpload {...args} />
      <IconAdminPanelSettings {...args} />
      <IconDatabase {...args} />
      <IconRemoveOperator {...args} />
      <IconNotifications {...args} />
      <IconMoreVert {...args} />
      <IconLogout {...args} />
      <IconChevronLeft {...args} />
      <IconChevronRight {...args} />
      <IconChevronDown {...args} />
      <IconChevronUp {...args} />
      <IconAdd {...args} />
      <IconEdit {...args} />
      <IconGroup {...args} />
      <IconDownload {...args} />
      <IconArrowTopRight {...args} />
      <IconFileCopy {...args} />
      <IconDelete {...args} />
      <IconSend {...args} />
      <IconPersonAdd {...args} />
      <IconPerson {...args} />
      <IconCheck {...args} />
      <IconLibraryAddCheck {...args} />
      <IconSelectCheckBox {...args} />
      <IconCheckBoxOutlineBlank {...args} />
      <IconCheckCircle {...args} />
      <IconError {...args} />
      <IconWarning {...args} />
      <IconInvitations {...args} />
      <IconWorkspaces {...args} />
      <IconFlag {...args} />
      <IconClose {...args} />
      <IconSchedule {...args} />
      <IconClearAll {...args} />
      <IconOpenInNew {...args} />
      <IconInfo {...args} />
      <IconSearch {...args} />
      <IconRefresh {...args} />
      <IconSync {...args} />
      <IconGridView {...args} />
      <IconArrowUpward {...args} />
      <IconArrowDownward {...args} />
      <IconExpandMore {...args} />
      <IconList {...args} />
      <IconHourglass {...args} />
      <IconKeyboardArrowLeft {...args} />
      <IconKeyboardArrowRight {...args} />
      <IconKeyboardDoubleArrowRight {...args} />
      <IconKeyboardDoubleArrowLeft {...args} />
      <IconFirstPage {...args} />
      <IconLastPage {...args} />
      <IconHistory {...args} />
      <IconModeHeat {...args} />
      <IconSecurity {...args} />
      <IconVisibility {...args} />
      <IconTune {...args} />
      <IconHome {...args} />
      <IconStacks {...args} />
      <IconCloudUpload {...args} />
      <IconBolt {...args} />
      <IconChat {...args} />
      <IconFavorite {...args} />
      <IconWhatshot {...args} />
      <IconSwapVerticalCircle {...args} />
      <IconFrontHand {...args} />
      <IconHandshake {...args} />
      <IconRemoveModerator {...args} />
      <IconShield {...args} />
      <IconThumbUp {...args} />
      <IconThumbDown {...args} />
    </div>
  ),
}
