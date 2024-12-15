// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { defineRecipe } from '@chakra-ui/react'
import { variables } from '../../variables'

export default defineRecipe({
  variants: {
    visual: {
      'solid-rounded': {
        tab: {
          fontSize: variables.bodyFontSize,
          _focus: {
            boxShadow: 'none',
          },
          _selected: {
            bg: { base: 'black', _dark: 'white' },
          },
        },
        tabpanel: {
          p: '60px 0 0 0',
        },
      },
      line: {
        tab: {
          fontSize: variables.bodyFontSize,
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
})
