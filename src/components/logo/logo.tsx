import { useCallback } from 'react'
import { CenterProps, useColorMode } from '@chakra-ui/react'
import cx from 'classnames'
import KouprLogoSvg from './assets/koupr-logo.svg?react'
import VoltaserveLogoDarkGlossySvg from './assets/voltaserve-logo-dark-glossy.svg?react'
import VoltaserveLogoDarkSvg from './assets/voltaserve-logo-dark.svg?react'
import VoltaserveLogoGlossySvg from './assets/voltaserve-logo-glossy.svg?react'
import VoltaserveLogoSvg from './assets/voltaserve-logo.svg?react'

export type LogoProps = CenterProps & {
  isGlossy?: boolean
  type?: 'voltaserve' | 'koupr'
  size?: 'sm' | 'md'
}

export const Logo = ({ type, size, isGlossy = false }: LogoProps) => {
  const { colorMode } = useColorMode()
  const renderSvg = useCallback(() => {
    if (type == 'voltaserve') {
      if (isGlossy) {
        return colorMode === 'dark' ? (
          <VoltaserveLogoDarkGlossySvg />
        ) : (
          <VoltaserveLogoGlossySvg />
        )
      } else {
        return colorMode === 'dark' ? (
          <VoltaserveLogoDarkSvg />
        ) : (
          <VoltaserveLogoSvg />
        )
      }
    } else if (type == 'koupr') {
      return <KouprLogoSvg />
    }
  }, [type, colorMode, isGlossy])

  return (
    <div
      className={cx('flex', 'items-center', 'justify-center', {
        'w-[16px]': type == 'voltaserve' && size === 'sm',
        'h-[32px]': type == 'voltaserve' && size === 'sm',
        'w-[64px]': type == 'voltaserve' && size === 'md',
        'h-[126px]': type == 'voltaserve' && size === 'md',
        'w-[26px]': type == 'koupr' && size === 'sm',
        'h-[23px]': type == 'koupr' && size === 'sm',
        'w-[128px]': type == 'koupr' && size === 'md',
        'h-[110px]': type == 'koupr' && size === 'md',
      })}
    >
      {renderSvg()}
    </div>
  )
}
