// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { variables } from '../../variables'

const card = {
  baseStyle: {
    root: {
      borderRadius: variables.borderRadiusMd,
    },
  },
  variants: {
    outline: {
      root: {
        borderRadius: variables.borderRadiusMd,
      },
    },
  },
  sizes: {
    md: {
      root: {
        borderRadius: variables.borderRadiusMd,
      },
    },
  },
}

export default card
