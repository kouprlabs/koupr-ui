import { Spinner as ChakraSpinner } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Spinner = (props: any) => (
  <ChakraSpinner size="sm" thickness="4px" {...props} />
)
