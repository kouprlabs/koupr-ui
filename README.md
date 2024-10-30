# Koupr UI

## Installation

```shell
npm i @koupr/ui
```

## Usage

```shell
npm i @koupr/ui
```

```tsx
import { createRoot } from 'react-dom/client'
import { theme } from '@koupr/ui'
import App from "./App"

createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App/>
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
