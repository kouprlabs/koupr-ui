// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { CSSProperties, HTMLAttributes } from 'react'
import { cx } from '@emotion/css'

export type IconProps = {
  filled?: boolean
  fontSize?: string
} & HTMLAttributes<HTMLSpanElement>

export const IconPlayArrow = (props: IconProps) => (
  <Wrapper {...props}>play_arrow</Wrapper>
)

export const IconUpload = (props: IconProps) => (
  <Wrapper {...props}>upload</Wrapper>
)

export const IconAdminPanelSettings = (props: IconProps) => (
  <Wrapper {...props}>admin_panel_settings</Wrapper>
)

export const IconDatabase = (props: IconProps) => (
  <Wrapper {...props}>database</Wrapper>
)

export const IconRemoveOperator = (props: IconProps) => (
  <Wrapper {...props}>remove_moderator</Wrapper>
)

export const IconNotifications = (props: IconProps) => (
  <Wrapper {...props}>notifications</Wrapper>
)

export const IconMoreVert = (props: IconProps) => (
  <Wrapper {...props}>more_vert</Wrapper>
)

export const IconLogout = (props: IconProps) => (
  <Wrapper {...props}>logout</Wrapper>
)

export const IconChevronLeft = (props: IconProps) => (
  <Wrapper {...props}>chevron_left</Wrapper>
)

export const IconChevronRight = (props: IconProps) => (
  <Wrapper {...props}>chevron_right</Wrapper>
)

export const IconChevronDown = (props: IconProps) => (
  <Wrapper {...props}>keyboard_arrow_down</Wrapper>
)

export const IconChevronUp = (props: IconProps) => (
  <Wrapper {...props}>keyboard_arrow_up</Wrapper>
)

export const IconAdd = (props: IconProps) => <Wrapper {...props}>add</Wrapper>

export const IconEdit = (props: IconProps) => <Wrapper {...props}>edit</Wrapper>

export const IconGroup = (props: IconProps) => (
  <Wrapper {...props}>group</Wrapper>
)

export const IconDownload = (props: IconProps) => (
  <Wrapper {...props}>download</Wrapper>
)

export const IconArrowTopRight = (props: IconProps) => (
  <Wrapper {...props}>arrow_top_right</Wrapper>
)

export const IconFileCopy = (props: IconProps) => (
  <Wrapper {...props}>file_copy</Wrapper>
)

export const IconDelete = (props: IconProps) => (
  <Wrapper {...props}>delete</Wrapper>
)

export const IconSend = (props: IconProps) => <Wrapper {...props}>send</Wrapper>

export const IconPersonAdd = (props: IconProps) => (
  <Wrapper {...props}>person_add</Wrapper>
)

export const IconPerson = (props: IconProps) => (
  <Wrapper {...props}>person</Wrapper>
)

export const IconCheck = (props: IconProps) => (
  <Wrapper {...props}>check</Wrapper>
)

export const IconLibraryAddCheck = (props: IconProps) => (
  <Wrapper {...props}>library_add_check</Wrapper>
)

export const IconSelectCheckBox = (props: IconProps) => (
  <Wrapper {...props}>select_check_box</Wrapper>
)

export const IconCheckBoxOutlineBlank = (props: IconProps) => (
  <Wrapper {...props}>check_box_outline_blank</Wrapper>
)

export const IconCheckCircle = (props: IconProps) => (
  <Wrapper {...props}>check_circle</Wrapper>
)

export const IconError = (props: IconProps) => (
  <Wrapper {...props}>error</Wrapper>
)

export const IconWarning = (props: IconProps) => (
  <Wrapper {...props}>warning</Wrapper>
)

export const IconInvitations = (props: IconProps) => (
  <Wrapper {...props}>forward_to_inbox</Wrapper>
)

export const IconWorkspaces = (props: IconProps) => (
  <Wrapper {...props}>workspaces</Wrapper>
)

export const IconFlag = (props: IconProps) => <Wrapper {...props}>flag</Wrapper>

export const IconClose = (props: IconProps) => (
  <Wrapper {...props}>close</Wrapper>
)

export const IconSchedule = (props: IconProps) => (
  <Wrapper {...props}>schedule</Wrapper>
)

export const IconClearAll = (props: IconProps) => (
  <Wrapper {...props}>clear_all</Wrapper>
)

export const IconOpenInNew = (props: IconProps) => (
  <Wrapper {...props}>open_in_new</Wrapper>
)

export const IconInfo = (props: IconProps) => <Wrapper {...props}>info</Wrapper>

export const IconSearch = (props: IconProps) => (
  <Wrapper {...props}>search</Wrapper>
)

export const IconRefresh = (props: IconProps) => (
  <Wrapper {...props}>refresh</Wrapper>
)

export const IconSync = (props: IconProps) => <Wrapper {...props}>sync</Wrapper>

export const IconGridView = (props: IconProps) => (
  <Wrapper {...props}>grid_view</Wrapper>
)

export const IconArrowUpward = (props: IconProps) => (
  <Wrapper {...props}>arrow_upward</Wrapper>
)

export const IconArrowDownward = (props: IconProps) => (
  <Wrapper {...props}>arrow_downward</Wrapper>
)

export const IconExpandMore = (props: IconProps) => (
  <Wrapper {...props}>expand_more</Wrapper>
)

export const IconList = (props: IconProps) => <Wrapper {...props}>list</Wrapper>

export const IconHourglass = (props: IconProps) => (
  <Wrapper {...props}>hourglass</Wrapper>
)

export const IconKeyboardArrowLeft = (props: IconProps) => (
  <Wrapper {...props}>keyboard_arrow_left</Wrapper>
)

export const IconKeyboardArrowRight = (props: IconProps) => (
  <Wrapper {...props}>keyboard_arrow_right</Wrapper>
)

export const IconKeyboardDoubleArrowRight = (props: IconProps) => (
  <Wrapper {...props}>keyboard_double_arrow_right</Wrapper>
)

export const IconKeyboardDoubleArrowLeft = (props: IconProps) => (
  <Wrapper {...props}>keyboard_double_arrow_left</Wrapper>
)

export const IconFirstPage = (props: IconProps) => (
  <Wrapper {...props}>first_page</Wrapper>
)

export const IconLastPage = (props: IconProps) => (
  <Wrapper {...props}>last_page</Wrapper>
)

export const IconHistory = (props: IconProps) => (
  <Wrapper {...props}>history</Wrapper>
)

export const IconModeHeat = (props: IconProps) => (
  <Wrapper {...props}>mode_heat</Wrapper>
)

export const IconSecurity = (props: IconProps) => (
  <Wrapper {...props}>security</Wrapper>
)

export const IconVisibility = (props: IconProps) => (
  <Wrapper {...props}>visibility</Wrapper>
)

export const IconTune = (props: IconProps) => <Wrapper {...props}>tune</Wrapper>

export const IconHome = (props: IconProps) => <Wrapper {...props}>home</Wrapper>

export const IconStacks = (props: IconProps) => (
  <Wrapper {...props}>stacks</Wrapper>
)

export const IconCloudUpload = (props: IconProps) => (
  <Wrapper {...props}>cloud_upload</Wrapper>
)

export const IconBolt = (props: IconProps) => <Wrapper {...props}>bolt</Wrapper>

export const IconChat = (props: IconProps) => <Wrapper {...props}>chat</Wrapper>

export const IconFavorite = (props: IconProps) => (
  <Wrapper {...props}>favorite</Wrapper>
)

export const IconWhatshot = (props: IconProps) => (
  <Wrapper {...props}>whatshot</Wrapper>
)

export const IconSwapVerticalCircle = (props: IconProps) => (
  <Wrapper {...props}>swap_vertical_circle</Wrapper>
)

export const IconFrontHand = (props: IconProps) => (
  <Wrapper {...props}>front_hand</Wrapper>
)

export const IconHandshake = (props: IconProps) => (
  <Wrapper {...props}>handshake</Wrapper>
)

export const IconRemoveModerator = (props: IconProps) => (
  <Wrapper {...props}>remove_moderator</Wrapper>
)

export const IconShield = (props: IconProps) => (
  <Wrapper {...props}>shield</Wrapper>
)

export const IconThumbUp = (props: IconProps) => (
  <Wrapper {...props}>thumb_up</Wrapper>
)

export const IconThumbDown = (props: IconProps) => (
  <Wrapper {...props}>thumb_down</Wrapper>
)

type WrapperProps = {
  children?: React.ReactNode
  styles?: CSSProperties
} & IconProps

const Wrapper = ({ className, filled, children, ...props }: WrapperProps) => (
  <span
    className={cx(
      'koupr-material-symbols-rounded',
      { 'koupr-material-symbols-rounded__filled': filled },
      className,
    )}
    style={{ fontSize: props.style?.fontSize ?? '16px' }}
    {...props}
  >
    {children}
  </span>
)
