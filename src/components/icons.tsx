import { HTMLAttributes } from 'react'
import { cx } from '@emotion/css'

export type IconProps = {
  filled?: boolean
} & HTMLAttributes<HTMLSpanElement>

export const IconPlayArrow = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    play_arrow
  </span>
)

export const IconUpload = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    upload
  </span>
)

export const IconAdmin = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    admin_panel_settings
  </span>
)

export const IconDatabase = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    database
  </span>
)

export const IconRemoveOperator = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    remove_moderator
  </span>
)

export const IconNotifications = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    notifications
  </span>
)

export const IconMoreVert = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    more_vert
  </span>
)

export const IconLogout = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    logout
  </span>
)

export const IconChevronLeft = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    chevron_left
  </span>
)

export const IconChevronRight = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    chevron_right
  </span>
)

export const IconChevronDown = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    keyboard_arrow_down
  </span>
)

export const IconChevronUp = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    keyboard_arrow_up
  </span>
)

export const IconAdd = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    add
  </span>
)

export const IconEdit = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    edit
  </span>
)

export const IconGroup = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    group
  </span>
)

export const IconDownload = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    download
  </span>
)

export const IconArrowTopRight = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    arrow_top_right
  </span>
)

export const IconFileCopy = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    file_copy
  </span>
)

export const IconDelete = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    delete
  </span>
)

export const IconSend = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    send
  </span>
)

export const IconPersonAdd = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    person_add
  </span>
)

export const IconPerson = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    person
  </span>
)

export const IconCheck = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    check
  </span>
)

export const IconLibraryAddCheck = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    library_add_check
  </span>
)

export const IconSelectCheckBox = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    select_check_box
  </span>
)

export const IconCheckBoxOutlineBlank = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    check_box_outline_blank
  </span>
)

export const IconCheckCircle = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    check_circle
  </span>
)

export const IconError = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    error
  </span>
)

export const IconWarning = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    warning
  </span>
)

export const IconInvitations = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    forward_to_inbox
  </span>
)

export const IconWorkspaces = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    workspaces
  </span>
)

export const IconFlag = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    flag
  </span>
)

export const IconClose = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    close
  </span>
)

export const IconSchedule = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    schedule
  </span>
)

export const IconClearAll = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    clear_all
  </span>
)

export const IconOpenInNew = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    open_in_new
  </span>
)

export const IconInfo = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    info
  </span>
)

export const IconSearch = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    search
  </span>
)

export const IconRefresh = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    refresh
  </span>
)

export const IconSync = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    sync
  </span>
)

export const IconGridView = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    grid_view
  </span>
)

export const IconArrowUpward = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    arrow_upward
  </span>
)

export const IconArrowDownward = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    arrow_downward
  </span>
)

export const IconExpandMore = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    expand_more
  </span>
)

export const IconList = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    list
  </span>
)

export const IconHourglass = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    hourglass
  </span>
)

export const IconKeyboardArrowLeft = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    keyboard_arrow_left
  </span>
)

export const IconKeyboardArrowRight = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    keyboard_arrow_right
  </span>
)

export const IconKeyboardDoubleArrowRight = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    keyboard_double_arrow_right
  </span>
)

export const IconKeyboardDoubleArrowLeft = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    keyboard_double_arrow_left
  </span>
)

export const IconFirstPage = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    first_page
  </span>
)

export const IconLastPage = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    last_page
  </span>
)

export const IconHistory = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    history
  </span>
)

export const IconModeHeat = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    mode_heat
  </span>
)

export const IconSecurity = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    security
  </span>
)

export const IconVisibility = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    visibility
  </span>
)

export const IconTune = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    tune
  </span>
)

export const IconHome = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    home
  </span>
)

export const IconStacks = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    stacks
  </span>
)

export const IconCloudUpload = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    cloud_upload
  </span>
)

export const IconBolt = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    bolt
  </span>
)

export const IconChat = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    chat
  </span>
)

export const IconFavorite = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    favorite
  </span>
)

export const IconWhatshot = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    whatshot
  </span>
)

export const IconSwapVerticalCircle = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    swap_vertical_circle
  </span>
)

export const IconFrontHand = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    front_hand
  </span>
)

export const IconHandshake = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    handshake
  </span>
)

export const IconRemoveModerator = ({
  className,
  filled,
  ...props
}: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    remove_moderator
  </span>
)

export const IconShield = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    shield
  </span>
)

export const IconThumbUp = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    thumb_up
  </span>
)

export const IconThumbDown = ({ className, filled, ...props }: IconProps) => (
  <span className={getClassName({ filled, className })} {...props}>
    thumb_down
  </span>
)

type GetClassNameOptions = {
  filled?: boolean
  className?: string
}

function getClassName({ filled, className }: GetClassNameOptions) {
  return cx(
    'koupr-material-symbols-rounded',
    { 'koupr-material-symbols-rounded__filled': filled },
    'koupr-text-[16px]',
    className,
  )
}
