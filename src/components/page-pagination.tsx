import { ChangeEvent, useCallback } from 'react'
import { Select } from '@chakra-ui/react'
import { Pagination } from './pagination'

type PagePaginationProps = {
  totalPages: number
  page: number
  size: number
  steps: number[]
  uiSize?: string
  handlePageChange: (page: number) => void
  setSize: (size: number) => void
}

export const PagePagination = ({
  totalPages,
  page,
  size,
  uiSize = 'md',
  steps,
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
            uiSize={uiSize}
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
