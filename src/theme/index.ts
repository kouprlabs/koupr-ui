// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import breakpoints from './breakpoints'
import globalCss from './global-css'
import { button, heading, link, textarea, tooltip, input } from './recipes'
import semanticTokens from './semantic-tokens'
import {
  breadcrumb,
  card,
  checkbox,
  menu,
  modal,
  popover,
  progress,
  select,
} from './slot-recipes'
import tokens from './tokens'

const config = defineConfig({
  globalCss,
  theme: {
    breakpoints,
    tokens,
    semanticTokens,
    slotRecipes: {
      breadcrumb,
      card,
      checkbox,
      menu,
      modal,
      popover,
      progress,
      select,
    },
    recipes: {
      button,
      heading,
      textarea,
      link,
      tooltip,
      input,
    },
  },
})

export const system = createSystem(defaultConfig, config)
