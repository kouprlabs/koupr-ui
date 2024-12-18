// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import {
  useCallback,
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useRef,
} from 'react'
import { IconButton, Input } from '@chakra-ui/react'
import cx from 'classnames'
import { IconClose, IconSearch } from './icons'
import { Button } from './ui/button'
import { InputGroup } from './ui/input-group'

export type SearchInputProps = {
  placeholder?: string
  query?: string
  onChange?: (value: string) => void
  onValue?: (value: string) => void
  onClear?: () => void
}

export const SearchInput = ({
  placeholder,
  query,
  onChange,
  onValue,
  onClear,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [draft, setDraft] = useState('')
  const [text, setText] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setDraft(query || '')
  }, [query])

  useEffect(() => {
    onChange?.(text)
  }, [text, onChange])

  const handleClear = useCallback(() => {
    setDraft('')
    setText('')
    onClear?.()
  }, [onClear])

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setDraft(event.target.value || '')
  }, [])

  const handleSearch = useCallback(
    (value: string) => {
      setText(value)
      onValue?.(value)
    },
    [onValue],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>, value: string) => {
      if (event.key === 'Enter') {
        handleSearch(value)
      }
    },
    [handleSearch],
  )

  return (
    <div className={cx('koupr-flex', 'koupr-flex-row', 'koupr-gap-0.5')}>
      <InputGroup
        className={cx('koupr-grow')}
        startElement={<IconSearch className={cx('koupr-text-gray-300')} />}
        endElement={
          draft ? (
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
          ref={inputRef}
          value={draft}
          placeholder={draft || placeholder || 'Search'}
          variant="subtle"
          onKeyDown={(event) => handleKeyDown(event, draft)}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoFocus
        />
      </InputGroup>
      {draft || (isFocused && draft) ? (
        <Button onClick={() => handleSearch(draft)} disabled={!draft}>
          Search
        </Button>
      ) : null}
    </div>
  )
}
