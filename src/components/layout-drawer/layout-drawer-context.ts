import { createContext } from 'react'

export type DrawerContextType = {
  isCollapsed: boolean | undefined
  isTouched: boolean
}

export const LayoutDrawerContext = createContext<DrawerContextType>({
  isCollapsed: undefined,
  isTouched: false,
})
