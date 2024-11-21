// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { variables } from '../../variables'

const tab = {
  variants: {
    'solid-rounded': (props: StyleFunctionProps) => ({
      tab: {
        fontSize: variables.bodyFontSize,
        _focus: {
          boxShadow: 'none',
        },
        _selected: {
          bg: mode('black', 'white')(props),
        },
      },
      tabpanel: {
        p: '60px 0 0 0',
      },
    }),
    'line': {
      tab: {
        fontSize: variables.bodyFontSize,
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
}

export default tab
