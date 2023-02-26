import { Center } from '@chakra-ui/react'
import { Spinner } from './spinner'

type SectionSpinnerProps = {
  width?: string
  height?: string
}

const DEFAULT_WIDTH = '100%'
const DEFAULT_HEIGHT = '300px'

export const SectionSpinner = ({ width, height }: SectionSpinnerProps) => (
  <Center w={width || DEFAULT_WIDTH} h={height || DEFAULT_HEIGHT}>
    <Spinner />
  </Center>
)
