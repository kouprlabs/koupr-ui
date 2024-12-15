// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { defineRecipe } from '@chakra-ui/react'
import { variables } from '../../variables'

export default defineRecipe({
  base: {
    borderRadius: variables.borderRadiusMd,
    fontWeight: variables.bodyFontWeight,
  },
  variants: {
    size: {
      md: {
        fontSize: variables.bodyFontSize,
      },
      xs: {
        fontSize: '12px',
      },
    },
    visual: {
      'solid-gray': {
        bg: { base: 'gray.100', _dark: 'gray.700' },
        _hover: {
          bg: { base: 'gray.200', _dark: 'gray.600' },
        },
      },
    },
  },
})
