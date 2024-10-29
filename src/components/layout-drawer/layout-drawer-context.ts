import { createContext } from 'react'

export type LayoutDrawerContextType = {
  isCollapsed: boolean | undefined
  isTouched: boolean
}

export const LayoutDrawerContext = createContext<LayoutDrawerContextType>({
  isCollapsed: undefined,
  isTouched: false,
})
