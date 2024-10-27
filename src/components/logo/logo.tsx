import { useCallback } from 'react'
import { CenterProps, useColorMode } from '@chakra-ui/react'
import cx from 'classnames'
import LogoDarkGlossySvg from './assets/logo-dark-glossy.svg?react'
import LogoDarkSvg from './assets/logo-dark.svg?react'
import LogoGlossySvg from './assets/logo-glossy.svg?react'
import LogoSvg from './assets/logo.svg?react'

export type LogoProps = CenterProps & {
  isGlossy?: boolean
}

export const Logo = ({ isGlossy = false }: LogoProps) => {
  const { colorMode } = useColorMode()
  const renderSvg = useCallback(() => {
    if (isGlossy) {
      return colorMode === 'dark' ? <LogoDarkGlossySvg /> : <LogoGlossySvg />
    } else {
      return colorMode === 'dark' ? <LogoDarkSvg /> : <LogoSvg />
    }
  }, [colorMode, isGlossy])
  return (
    <div className={cx('flex', 'items-center', 'justify-center')}>
      {renderSvg()}
    </div>
  )
}
