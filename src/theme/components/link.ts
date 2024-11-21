// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE.md file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.

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
