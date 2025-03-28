# Koupr UI

Design system and React components.

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

## Releases

- Versions with _odd_ minor numbers like: `1.11` and `2.3` are LTS releases.
- Versions with _even_ minor numbers like: `1.10` and `2.2` are not meant to be relied upon in the long term.

## Development

Build library:

```shell
npm run build
```

Run Storybook:

```shell
npm run storybook
```

Build Storybook:

```shell
npm run build-storybook
```

## Licensing

Koupr UI is released under the [MIT License](LICENSE).
