import { ReactNode } from 'react'
import { useAppSelector } from '@/store/hook'
import { NavType } from '@/store/ui/nav'
import { Circle } from '@chakra-ui/react'
import cx from 'classnames'
import variables from '../../variables'

export type AccountMenuActiveCircleProps = {
  children?: ReactNode
}

export const AccountMenuActiveCircle = ({
  children,
}: AccountMenuActiveCircleProps) => {
  const activeNav = useAppSelector((state) => state.ui.nav.active)
  return (
    <Circle
      className={cx('w-[50px]', 'h-[50px]')}
      bg={activeNav === NavType.Account ? variables.gradiant : 'transparent'}
    >
      {children}
    </Circle>
  )
}
