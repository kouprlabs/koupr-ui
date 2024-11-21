// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import React, { ChangeEvent, useCallback } from 'react'
import { Select } from '@chakra-ui/react'
import cx from 'classnames'
import { usePageMonitor } from '../hooks'
import { Pagination, PaginationProps } from './pagination'

export type PagePaginationProps = {
  totalPages: number
  totalElements: number
  page: number
  size: number
  steps: number[]
  paginationSize?: PaginationProps['size']
  style?: React.CSSProperties
  isFirstDisabled?: boolean
  isLastDisabled?: boolean
  isFastForwardDisabled?: boolean
  isRewindDisabled?: boolean
  setPage: (page: number) => void
  setSize: (size: number) => void
}

export const PagePagination = ({
  totalElements,
  totalPages,
  page,
  size,
  paginationSize,
  steps,
  style,
  setPage,
  setSize,
  isFirstDisabled = false,
  isLastDisabled = false,
  isFastForwardDisabled = false,
  isRewindDisabled = false,
}: PagePaginationProps) => {
  const { hasPageSwitcher, hasSizeSelector, hasPagination } = usePageMonitor({
    totalElements,
    totalPages,
    steps,
  })

  const handleSizeChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSize(parseInt(event.target.value))
      setPage(1)
    },
    [setSize, setPage],
  )

  return (
    <>
      {hasPagination ? (
        <div
          className={cx(
            'koupr-flex',
            'koupr-flex-row',
            'koupr-items-center',
            'koupr-gap-1.5',
          )}
          style={style}
        >
          {hasPageSwitcher ? (
            <Pagination
              size={paginationSize}
              page={page}
              totalPages={totalPages}
              isFirstDisabled={isFirstDisabled}
              isLastDisabled={isLastDisabled}
              isFastForwardDisabled={isFastForwardDisabled}
              isRewindDisabled={isRewindDisabled}
              onPageChange={setPage}
            />
          ) : null}
          {hasSizeSelector ? (
            <Select defaultValue={size} onChange={handleSizeChange}>
              {steps?.map((step, index) => (
                <option key={index} value={step.toString()}>
                  {step} items
                </option>
              ))}
            </Select>
          ) : null}
        </div>
      ) : null}
    </>
  )
}
