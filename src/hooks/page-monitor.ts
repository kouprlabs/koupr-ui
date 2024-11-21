// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.

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
