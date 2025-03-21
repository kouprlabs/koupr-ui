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
import {
  Button,
  HStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Input,
} from '@chakra-ui/react'
import cx from 'classnames'
import { IconClose, IconSearch } from './icons'

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
    <HStack>
      <InputGroup>
        <InputLeftElement className={cx('koupr-pointer-events-none')}>
          <IconSearch className={cx('koupr-text-gray-300')} />
        </InputLeftElement>
        <Input
          ref={inputRef}
          value={draft}
          placeholder={draft || placeholder || 'Search'}
          variant="filled"
          onKeyDown={(event) => handleKeyDown(event, draft)}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoFocus
        />
        {draft ? (
          <InputRightElement>
            <IconButton
              icon={<IconClose />}
              onClick={handleClear}
              size="xs"
              title="Clear search"
              aria-label="Clear search"
            />
          </InputRightElement>
        ) : null}
      </InputGroup>
      {draft || (isFocused && draft) ? (
        <Button onClick={() => handleSearch(draft)} isDisabled={!draft}>
          Search
        </Button>
      ) : null}
    </HStack>
  )
}
