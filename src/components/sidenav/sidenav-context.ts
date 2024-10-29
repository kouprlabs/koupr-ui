import { createContext } from 'react'

export type SidenavContextType = {
  isCollapsed: boolean | undefined
  isTouched: boolean
}

export const SidenavContext = createContext<SidenavContextType>({
  isCollapsed: undefined,
  isTouched: false,
})
