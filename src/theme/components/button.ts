// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { variables } from '../../variables'

const button = {
  baseStyle: {
    borderRadius: variables.borderRadiusMd,
    fontWeight: variables.bodyFontWeight,
  },
  sizes: {
    md: {
      fontSize: variables.bodyFontSize,
    },
    xs: {
      fontSize: '12px',
    },
  },
  variants: {
    'solid-gray': (props: StyleFunctionProps) => ({
      bg: mode('gray.100', 'gray.700')(props),
      _hover: {
        bg: mode('gray.200', 'gray.600')(props),
      },
    }),
  },
}

export default button
