declare module '*.svg?react' {
  import * as React from 'react'
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

/// <reference path="../dist/types.d.ts" />
declare module '@koupr/ui' {
  export * from 'dist/types.d.ts'
}
