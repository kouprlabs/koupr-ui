// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.

const link = {
  baseStyle: {
    textDecoration: 'underline',
    _active: {
      boxShadow: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
  variants: {
    'no-underline': {
      textDecoration: 'none',
      _hover: {
        textDecoration: 'none',
      },
    },
  },
}

export default link
