// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { defineSlotRecipe } from '@chakra-ui/react'

export default defineSlotRecipe({
  slots: ['list', 'item'],
  base: {
    list: {
      borderRadius: '15px',
      py: '12px',
    },
    item: {
      px: '12px',
    },
  },
})
