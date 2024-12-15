// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { defineRecipe } from '@chakra-ui/react'
import { variables } from '../../variables'

export default defineRecipe({
  base: {
    fontFamily: variables.headingFontFamily,
    fontWeight: variables.headingFontWeight,
  },
})
