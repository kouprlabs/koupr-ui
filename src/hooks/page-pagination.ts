// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { useCallback, useEffect, useMemo, useState } from 'react'
import { StorageOptions } from '../common-types'

export type UsePagePaginationOptions = {
  navigateFn?: (href: string) => void
  searchFn: () => string
  storage?: StorageOptions
  steps?: number[]
}

export type UsePagePaginationResult = {
  page: number
  size: number
  steps: number[]
  setPage: (page: number) => void
  setSize: (size: number) => void
}

export const usePagePagination = ({
  navigateFn,
  searchFn,
  storage = {
    prefix: 'app',
    namespace: 'main',
  },
  steps = [5, 10, 20, 40, 80, 100],
}: UsePagePaginationOptions): UsePagePaginationResult => {
  const search = searchFn()
  const queryParams = useMemo(() => new URLSearchParams(search), [search])
  const page = Number(queryParams.get('page')) || 1
  const storageSizeKey = useMemo(
    () => `${storage.prefix}_${storage.namespace}_pagination_size`,
    [storage],
  )
  const [size, setSize] = useState(
    localStorage.getItem(storageSizeKey) && storage
      ? parseInt(localStorage.getItem(storageSizeKey) as string)
      : steps[0],
  )

  const _setSize = useCallback(
    (size: number) => {
      setSize(size)
      if (size && storage) {
        localStorage.setItem(storageSizeKey, JSON.stringify(size))
      }
    },
    [storageSizeKey, storage],
  )

  useEffect(() => {
    if (!queryParams.has('page')) {
      queryParams.set('page', '1')
      navigateFn?.(`?${queryParams.toString()}`)
    }
  }, [queryParams, navigateFn])

  const setPage = useCallback(
    (page: number) => {
      queryParams.set('page', String(page))
      navigateFn?.(`?${queryParams.toString()}`)
    },
    [queryParams, navigateFn],
  )

  return { page, size, steps, setPage, setSize: _setSize }
}
