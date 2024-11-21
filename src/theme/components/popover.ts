// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { variables } from '../../variables'

const popover = {
  baseStyle: {
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
}

export default popover
