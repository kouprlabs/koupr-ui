import { ChakraProvider } from '@chakra-ui/react'
import type { Preview } from '@storybook/react'
import theme from '../src/theme'
import '../styles/index.css'

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
        <Story />
      </ChakraProvider>
    ),
  ],
}

export default preview
