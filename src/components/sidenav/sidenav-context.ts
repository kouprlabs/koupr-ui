// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { createContext } from 'react'

export type SidenavContextType = {
  isCollapsed: boolean | undefined
  isTouched: boolean
}

export const SidenavContext = createContext<SidenavContextType>({
  isCollapsed: undefined,
  isTouched: false,
})
