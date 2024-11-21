// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
