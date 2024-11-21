// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { useCallback, useMemo } from 'react'
import {
  ButtonGroup,
  Button,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react'
import {
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
  IconFirstPage,
  IconLastPage,
  IconKeyboardDoubleArrowLeft,
  IconKeyboardDoubleArrowRight,
} from './icons'

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
    <ButtonGroup>
      {!isFirstDisabled ? (
        <IconButton
          variant="outline"
          size={size}
          isDisabled={page === 1}
          icon={<IconFirstPage />}
          title="First"
          aria-label="First"
          onClick={() => handlePageChange(firstPage)}
        />
      ) : null}
      {!isRewindDisabled ? (
        <IconButton
          variant="outline"
          size={size}
          isDisabled={rewindPage < 1}
          icon={<IconKeyboardDoubleArrowLeft />}
          title="Rewind"
          aria-label="Rewind"
          onClick={() => handlePageChange(rewindPage)}
        />
      ) : null}
      <IconButton
        variant="outline"
        size={size}
        isDisabled={page === 1}
        icon={<IconKeyboardArrowLeft />}
        title="Previous"
        aria-label="Previous"
        onClick={() => handlePageChange(previousPage)}
      />
      {pages.map((index) => (
        <Button
          size={size}
          key={index}
          isDisabled={index > totalPages}
          onClick={() => handlePageChange(index)}
          colorScheme={index === page ? 'blue' : undefined}
        >
          {index}
        </Button>
      ))}
      <IconButton
        variant="outline"
        size={size}
        isDisabled={page === lastPage}
        icon={<IconKeyboardArrowRight />}
        title="Next"
        aria-label="Next"
        onClick={() => handlePageChange(nextPage)}
      />
      {!isFastForwardDisabled ? (
        <IconButton
          variant="outline"
          size={size}
          isDisabled={fastForwardPage > lastPage}
          icon={<IconKeyboardDoubleArrowRight />}
          title="Fast forward"
          aria-label="Fast forward"
          onClick={() => handlePageChange(fastForwardPage)}
        />
      ) : null}
      {!isLastDisabled ? (
        <IconButton
          variant="outline"
          size={size}
          isDisabled={page === lastPage}
          icon={<IconLastPage />}
          title="Last"
          aria-label="Last"
          onClick={() => handlePageChange(lastPage)}
        />
      ) : null}
    </ButtonGroup>
  )
}
