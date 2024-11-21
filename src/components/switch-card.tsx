// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import {
  ChangeEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Switch,
  Tooltip,
} from '@chakra-ui/react'
import cx from 'classnames'

export type SwitchCardProps = {
  children?: ReactNode
  icon: ReactElement
  label: string
  isCollapsed?: boolean
  localStorageNamespace: string
  expandedMinWidth?: string
}

export const SwitchCard = ({
  children,
  icon,
  label,
  isCollapsed,
  localStorageNamespace,
  expandedMinWidth,
}: SwitchCardProps) => {
  const [isActive, setIsActive] = useState(false)
  const localStorageActiveKey = useMemo(
    () => `voltaserve_${localStorageNamespace}_switch_card_active`,
    [localStorageNamespace],
  )

  useEffect(() => {
    let active = false
    if (typeof localStorage !== 'undefined') {
      const value = localStorage.getItem(localStorageActiveKey)
      if (value) {
        active = JSON.parse(value)
      } else {
        localStorage.setItem(localStorageActiveKey, JSON.stringify(false))
      }
    }
    if (active) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [localStorageActiveKey, setIsActive])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setIsActive(event.target.checked)
      localStorage.setItem(
        localStorageActiveKey,
        JSON.stringify(event.target.checked),
      )
    },
    [localStorageActiveKey],
  )

  if (isCollapsed) {
    return (
      <Popover>
        <PopoverTrigger>
          <div>
            <Tooltip label={label}>
              <IconButton
                icon={icon}
                variant="outline"
                className={cx(
                  'koupr-w-[50px]',
                  'koupr-h-[50px]',
                  'koupr-p-1.5',
                  'koupr-rounded-md',
                )}
                aria-label={label}
                title={label}
              />
            </Tooltip>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>{children}</PopoverBody>
        </PopoverContent>
      </Popover>
    )
  } else {
    return (
      <div
        className={cx(
          'koupr-flex',
          'koupr-flex-col',
          'koupr-gap-0',
          'koupr-border',
          'koupr-border-gray-200',
          'dark:koupr-border-gray-600',
          'koupr-rounded-md',
        )}
        style={{ minWidth: expandedMinWidth }}
      >
        <div
          className={cx(
            'koupr-flex',
            'koupr-flex-row',
            'koupr-items-center',
            'koupr-gap-1',
            'koupr-h-[50px]',
            'koupr-px-1',
            'koupr-shrink-0',
          )}
        >
          {icon}
          <span className={cx('koupr-grow')}>{label}</span>
          <Switch isChecked={isActive} onChange={handleChange} />
        </div>
        {isActive ? (
          <div
            className={cx(
              'koupr-pt-0',
              'koupr-pr-1',
              'koupr-pb-1',
              'koupr-pl-1',
            )}
          >
            {children}
          </div>
        ) : null}
      </div>
    )
  }
}
