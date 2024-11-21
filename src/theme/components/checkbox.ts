// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { variables } from '../../variables'

const checkbox = {
  baseStyle: {
    control: {
      borderRadius: '50%',
    },
  },
  sizes: {
    md: {
      control: { w: '20px', h: '20px' },
      label: {
        fontSize: variables.bodyFontSize,
      },
    },
  },
}

export default checkbox
