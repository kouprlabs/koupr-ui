// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { useCallback, useMemo } from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'
import cx from 'classnames'
import {
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
  IconFirstPage,
  IconLastPage,
  IconKeyboardDoubleArrowLeft,
  IconKeyboardDoubleArrowRight,
} from './icons'
import { Button } from './ui/button'

export type PaginationProps = {
  totalPages: number
  page: number
  maxButtons?: number
  size?: IconButtonProps['size']
  isFirstDisabled?: boolean
  isLastDisabled?: boolean
  isFastForwardDisabled?: boolean
  isRewindDisabled?: boolean
  onPageChange?: (page: number) => void
}

export const Pagination = ({
  totalPages,
  page,
  maxButtons: maxButtonsProp = 5,
  size = 'md',
  isFirstDisabled = false,
  isLastDisabled = false,
  isFastForwardDisabled = false,
  isRewindDisabled = false,
  onPageChange,
}: PaginationProps) => {
  const maxButtons = totalPages < maxButtonsProp ? totalPages : maxButtonsProp
  const pages = useMemo(() => {
    const end = Math.ceil(page / maxButtons) * maxButtons
    const start = end - maxButtons + 1
    return Array.from({ length: end - start + 1 }, (_, index) => start + index)
  }, [page, maxButtons])
  const firstPage = 1
  const lastPage = totalPages
  const fastForwardPage = pages[pages.length - 1] + 1
  const rewindPage = pages[0] - maxButtons
  const nextPage = page + 1
  const previousPage = page - 1

  const handlePageChange = useCallback(
    (value: number) => {
      if (value !== page) {
        onPageChange?.(value)
      }
    },
    [page, onPageChange],
  )

  return (
    <div className={cx('koupr-flex', 'koupr-gap-1')}>
      {!isFirstDisabled ? (
        <IconButton
          variant="outline"
          size={size}
          disabled={page === 1}
          title="First"
          aria-label="First"
          onClick={() => handlePageChange(firstPage)}
        >
          <IconFirstPage />
        </IconButton>
      ) : null}
      {!isRewindDisabled ? (
        <IconButton
          variant="outline"
          size={size}
          disabled={rewindPage < 1}
          title="Rewind"
          aria-label="Rewind"
          onClick={() => handlePageChange(rewindPage)}
        >
          <IconKeyboardDoubleArrowLeft />
        </IconButton>
      ) : null}
      <IconButton
        variant="outline"
        size={size}
        disabled={page === 1}
        title="Previous"
        aria-label="Previous"
        onClick={() => handlePageChange(previousPage)}
      >
        <IconKeyboardArrowLeft />
      </IconButton>
      {pages.map((index) => (
        <Button
          size={size}
          key={index}
          disabled={index > totalPages}
          onClick={() => handlePageChange(index)}
          colorScheme={index === page ? 'blue' : undefined}
        >
          {index}
        </Button>
      ))}
      <IconButton
        variant="outline"
        size={size}
        disabled={page === lastPage}
        title="Next"
        aria-label="Next"
        onClick={() => handlePageChange(nextPage)}
      >
        <IconKeyboardArrowRight />
      </IconButton>
      {!isFastForwardDisabled ? (
        <IconButton
          variant="outline"
          size={size}
          disabled={fastForwardPage > lastPage}
          title="Fast forward"
          aria-label="Fast forward"
          onClick={() => handlePageChange(fastForwardPage)}
        >
          <IconKeyboardDoubleArrowRight />
        </IconButton>
      ) : null}
      {!isLastDisabled ? (
        <IconButton
          variant="outline"
          size={size}
          disabled={page === lastPage}
          title="Last"
          aria-label="Last"
          onClick={() => handlePageChange(lastPage)}
        >
          <IconLastPage />
        </IconButton>
      ) : null}
    </div>
  )
}
