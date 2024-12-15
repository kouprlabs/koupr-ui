// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { defineSlotRecipe } from '@chakra-ui/react'
import { variables } from '../../variables'

export default defineSlotRecipe({
  slots: ['dialog', 'closeButton'],
  base: {
    dialog: {
      borderRadius: variables.borderRadius,
    },
    closeButton: {
      borderRadius: '50%',
    },
  },
})
