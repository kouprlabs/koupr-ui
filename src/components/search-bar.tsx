// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import {
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useState,
} from 'react'
import { useCallback } from 'react'
import { IconButton, Input } from '@chakra-ui/react'
import cx from 'classnames'
import { IconClose, IconSearch } from './icons'
import { Button } from './ui/button'
import { InputGroup } from './ui/input-group'

export type SearchProps = {
  query?: string
  placeholder?: string
  buttons?: ReactElement
  onSearch?: (value: string) => void
  onClear?: () => void
}

export const SearchBar = ({
  query = '',
  placeholder,
  buttons,
  onSearch,
  onClear,
}: SearchProps) => {
  const [buffer, setBuffer] = useState(query)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (query) {
      setBuffer(query)
    } else {
      setBuffer('')
    }
  }, [query])

  const handleSearch = useCallback(
    (value: string) => {
      onSearch?.(value)
    },
    [onSearch],
  )

  const handleClear = useCallback(() => {
    setBuffer('')
    handleSearch('')
    onClear?.()
  }, [handleSearch, onClear])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        if (buffer.trim().length > 0) {
          handleSearch(buffer.trim())
        } else if (buffer.trim().length === 0) {
          handleClear()
        }
      }
    },
    [buffer, handleSearch, handleClear],
  )

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBuffer(event.target.value || '')
  }, [])

  return (
    <div
      className={cx(
        'koupr-flex',
        'koupr-flex-row',
        'koupr-gap-0.5',
        'koupr-grow',
      )}
    >
      <InputGroup
        className={cx('koupr-grow')}
        startElement={<IconSearch className={cx('koupr-text-gray-300')} />}
        endElement={
          query ? (
            <IconButton
              onClick={handleClear}
              size="xs"
              title="Clear search"
              aria-label="Clear search"
            >
              <IconClose />
            </IconButton>
          ) : null
        }
      >
        <Input
          value={buffer}
          placeholder={query || placeholder}
          variant="subtle"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </InputGroup>
      {buttons}
      {buffer || (isFocused && buffer) ? (
        <Button onClick={() => handleSearch(buffer)} disabled={!buffer}>
          <IconSearch />
          Search
        </Button>
      ) : null}
    </div>
  )
}
