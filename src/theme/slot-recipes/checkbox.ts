// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { defineSlotRecipe } from '@chakra-ui/react'
import { variables } from '../../variables'

export default defineSlotRecipe({
  slots: ['control', 'label'],
  base: {
    control: {
      borderRadius: '50%',
    },
  },
  variants: {
    size: {
      md: {
        control: {
          w: '20px',
          h: '20px',
        },
        label: {
          fontSize: variables.bodyFontSize,
        },
      },
    },
  },
})
