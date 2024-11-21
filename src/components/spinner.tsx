// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { Spinner as ChakraSpinner } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Spinner = (props: any) => (
  <ChakraSpinner size="sm" thickness="4px" {...props} />
)
