// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.

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
