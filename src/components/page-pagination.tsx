// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import React, { useCallback, useMemo } from 'react'
import { createListCollection } from '@chakra-ui/react'
import cx from 'classnames'
import { usePageMonitor } from '../hooks'
import { Pagination, PaginationProps } from './pagination'
import { SelectContent, SelectItem, SelectRoot } from './ui/select'

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
  const collection = useMemo(
    () =>
      createListCollection({
        items: steps.map((step) => ({
          label: `${step} items`,
          value: step.toString(),
        })),
      }),
    [steps],
  )

  const handleSizeChange = useCallback(
    ({ value }: { value: string[] }) => {
      setSize(parseInt(value[0]))
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
            <SelectRoot
              collection={collection}
              defaultValue={[size.toString()]}
              onValueChange={handleSizeChange}
            >
              <SelectContent>
                {collection.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          ) : null}
        </div>
      ) : null}
    </>
  )
}
