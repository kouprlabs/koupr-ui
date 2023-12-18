import { useCallback, useEffect, useMemo, useState } from 'react'

type NavigateArgs = {
  search: string
}

type NavigateFunction = (args: NavigateArgs) => void

type LocationObject = {
  search: string
}

type UsePagePaginationOptions = {
  navigate: NavigateFunction
  location: LocationObject
  storage?: {
    enabled?: boolean
    prefix?: string
    namespace?: string
  }
}

export const usePagePagination = ({
  navigate,
  location,
  storage = {
    enabled: false,
    prefix: 'app',
    namespace: 'main',
  },
}: UsePagePaginationOptions) => {
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  )
  const page = Number(queryParams.get('page')) || 1
  const storageSizeKey = useMemo(
    () => `${storage.prefix}_${storage.namespace}_pagination_size`,
    [storage],
  )
  const [size, setSize] = useState(
    localStorage.getItem(storageSizeKey) && !storage.enabled
      ? parseInt(localStorage.getItem(storageSizeKey) as string)
      : 5,
  )

  useEffect(() => {
    if (size && !storage.enabled) {
      localStorage.setItem(storageSizeKey, JSON.stringify(size))
    }
  }, [size, storageSizeKey, storage])

  useEffect(() => {
    if (!queryParams.has('page')) {
      queryParams.set('page', '1')
      navigate({ search: `?${queryParams.toString()}` })
    }
  }, [queryParams, navigate])

  const handlePageChange = useCallback(
    (page: number) => {
      queryParams.set('page', String(page))
      navigate({ search: `?${queryParams.toString()}` })
    },
    [queryParams, navigate],
  )

  return { page, size, onPageChange: handlePageChange, onSizeChange: setSize }
}
