// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
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
