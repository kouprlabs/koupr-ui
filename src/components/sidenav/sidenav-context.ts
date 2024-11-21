// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { createContext } from 'react'

export type SidenavContextType = {
  isCollapsed: boolean | undefined
  isTouched: boolean
}

export const SidenavContext = createContext<SidenavContextType>({
  isCollapsed: undefined,
  isTouched: false,
})
