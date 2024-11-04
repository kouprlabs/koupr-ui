import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@koupr/ui'
import type { Preview } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import './storybook.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ChakraProvider>
    ),
  ],
}

export default preview
