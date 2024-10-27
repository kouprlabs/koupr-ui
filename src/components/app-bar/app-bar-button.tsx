import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { IconAdd } from '../icons'

export const AppBarButton = () => (
  <Button
    as={Link}
    to="/new/workspace"
    leftIcon={<IconAdd />}
    variant="solid"
    colorScheme="blue"
  >
    New Workspace
  </Button>
)
