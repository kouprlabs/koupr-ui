// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
import { useCallback } from 'react'
import { CenterProps, useColorMode } from '@chakra-ui/react'
import cx from 'classnames'
// @ts-expect-error ignored
import kouprLogoSvg from './assets/koupr-logo.svg'
// @ts-expect-error ignored
import voltaserveLogoDarkGlossySvg from './assets/voltaserve-logo-dark-glossy.svg'
// @ts-expect-error ignored
import voltaserveLogoDarkSvg from './assets/voltaserve-logo-dark.svg'
// @ts-expect-error ignored
import voltaserveLogoGlossySvg from './assets/voltaserve-logo-glossy.svg'
// @ts-expect-error ignored
import voltaserveLogoSvg from './assets/voltaserve-logo.svg'

export type LogoProps = CenterProps & {
  isGlossy?: boolean
  type?: 'voltaserve' | 'koupr'
  size?: 'sm' | 'md'
}

export const Logo = ({ type, size, isGlossy = false }: LogoProps) => {
  const { colorMode } = useColorMode()
  const getSvg = useCallback(() => {
    if (type == 'voltaserve') {
      if (isGlossy) {
        return colorMode === 'dark'
          ? voltaserveLogoDarkGlossySvg
          : voltaserveLogoGlossySvg
      } else {
        return colorMode === 'dark' ? voltaserveLogoDarkSvg : voltaserveLogoSvg
      }
    } else if (type == 'koupr') {
      return kouprLogoSvg
    }
  }, [type, colorMode, isGlossy])

  return (
    <div
      className={cx(
        'koupr-flex',
        'koupr-items-center',
        'koupr-justify-center',
        {
          'koupr-w-[16px]': type == 'voltaserve' && size === 'sm',
          'koupr-h-[32px]': type == 'voltaserve' && size === 'sm',
          'koupr-w-[64px]': type == 'voltaserve' && size === 'md',
          'koupr-h-[126px]': type == 'voltaserve' && size === 'md',
          'koupr-w-[26px]': type == 'koupr' && size === 'sm',
          'koupr-h-[23px]': type == 'koupr' && size === 'sm',
          'koupr-w-[128px]': type == 'koupr' && size === 'md',
          'koupr-h-[110px]': type == 'koupr' && size === 'md',
        },
      )}
      dangerouslySetInnerHTML={{ __html: getSvg() }}
    ></div>
  )
}
