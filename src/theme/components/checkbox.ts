// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE.md file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
