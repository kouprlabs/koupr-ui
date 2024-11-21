// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.

export type UsePageMonitorMonitorOptions = {
  totalPages: number
  totalElements: number
  steps: number[]
}

export type UsePageMonitorMonitorResult = {
  hasPageSwitcher: boolean
  hasSizeSelector: boolean
  hasPagination: boolean
}

export const usePageMonitor = ({
  totalPages,
  totalElements,
  steps,
}: UsePageMonitorMonitorOptions): UsePageMonitorMonitorResult => {
  const hasPageSwitcher = totalPages > 1
  const hasSizeSelector = totalElements > steps[0]
  const hasPagination = hasPageSwitcher || hasSizeSelector

  return { hasPageSwitcher, hasSizeSelector, hasPagination }
}
