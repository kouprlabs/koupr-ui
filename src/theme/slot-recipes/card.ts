// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { defineSlotRecipe } from '@chakra-ui/react'
import { variables } from '../../variables'

export default defineSlotRecipe({
  slots: ['root'],
  base: {
    root: {
      borderRadius: variables.borderRadiusSm,
    },
  },
  variants: {
    visual: {
      outline: {
        root: {
          borderRadius: variables.borderRadiusSm,
        },
      },
    },
    size: {
      md: {
        root: {
          borderRadius: variables.borderRadiusSm,
        },
      },
    },
  },
})
