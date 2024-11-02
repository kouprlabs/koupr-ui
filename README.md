# Koupr UI

## Installation

```shell
npm i @koupr/ui
```

Koupr UI is meant to work on top of Chakra UI: https://v2.chakra-ui.com/getting-started

## Usage

```tsx
import { theme } from '@koupr/ui'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
```

## Development

Build:

```shell
npm run build
```

Watch:

```shell
npm run watch
```

## Licensing

Koupr UI is released under [The MIT License](./LICENSE.md).
