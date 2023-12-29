import { ChangeEvent, useCallback } from 'react'
import { Select } from '@chakra-ui/react'
import { Pagination } from './pagination'

type PagePaginationProps = {
  totalPages: number
  page: number
  size: number
  paginationSize?: string
  steps?: number[]
  handlePageChange: (page: number) => void
  setSize: (size: number) => void
}

export const PagePagination = ({
  totalPages,
  page,
  size,
  paginationSize = 'md',
  steps = [5, 10, 20, 40, 80, 100],
  handlePageChange,
  setSize,
}: PagePaginationProps) => {
  const handleSizeChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSize(parseInt(event.target.value))
      handlePageChange(1)
    },
    [setSize, handlePageChange],
  )

  return (
    <>
      {totalPages > 1 ? (
        <>
          <Pagination
            size={paginationSize}
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <Select defaultValue={size} onChange={handleSizeChange}>
            {steps.map((step, index) => (
              <option key={index} value={step.toString()}>
                {step} items
              </option>
            ))}
          </Select>
        </>
      ) : null}
    </>
  )
}
