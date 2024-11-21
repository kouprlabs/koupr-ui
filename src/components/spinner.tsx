// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { Spinner as ChakraSpinner } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Spinner = (props: any) => (
  <ChakraSpinner size="sm" thickness="4px" {...props} />
)
