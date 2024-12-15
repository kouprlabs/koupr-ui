// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { defineSlotRecipe } from '@chakra-ui/react'
import { variables } from '../../variables'

export default defineSlotRecipe({
  slots: ['content', 'closeButton'],
  base: {
    content: {
      borderRadius: '15px',
      padding: variables.spacingXs,
      boxShadow: 'none',
      _focus: {
        boxShadow: 'none',
      },
    },
    closeButton: {
      borderRadius: '50%',
      top: '10px',
      right: '10px',
    },
  },
})
