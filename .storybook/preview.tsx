// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { withThemeByClassName } from '@storybook/addon-themes'
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
      <ChakraProvider value={defaultSystem}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ChakraProvider>
    ),
    withThemeByClassName({
      defaultTheme: 'light',
      themes: { light: '', dark: 'dark' },
    }),
  ],
}

export default preview
