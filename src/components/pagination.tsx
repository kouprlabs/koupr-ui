import { ButtonGroup, Button } from '@chakra-ui/react'

type PaginationProps = {
  totalPages: number
  page: number
  maxButtons?: number
  uiSize?: string
  onPageChange?: (page: number) => void
}

export const Pagination = ({
  totalPages,
  page,
  maxButtons = 5,
  uiSize = 'md',
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const currentPage = Math.min(Math.max(1, page), totalPages)

    let startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1)
    const endPage = Math.min(startPage + maxButtons - 1, totalPages)

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(endPage - maxButtons + 1, 1)
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    )
  }

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber !== page) {
      onPageChange?.(pageNumber)
    }
  }

  const pageNumbers = getPageNumbers()

  return (
    <ButtonGroup>
      {page > 1 && (
        <Button size={uiSize} onClick={() => handlePageChange(1)}>
          First
        </Button>
      )}
      {page > 1 && (
        <Button size={uiSize} onClick={() => handlePageChange(page - 1)}>
          Previous
        </Button>
      )}
      {pageNumbers.map((pageNumber) => (
        <Button
          size={uiSize}
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          colorScheme={pageNumber === page ? 'blue' : undefined}
        >
          {pageNumber}
        </Button>
      ))}
      {page < totalPages && (
        <Button size={uiSize} onClick={() => handlePageChange(page + 1)}>
          Next
        </Button>
      )}
      {page < totalPages && (
        <Button size={uiSize} onClick={() => handlePageChange(totalPages)}>
          Last ({totalPages})
        </Button>
      )}
    </ButtonGroup>
  )
}
