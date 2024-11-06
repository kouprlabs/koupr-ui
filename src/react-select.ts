import { ColorMode, SystemStyleObject } from '@chakra-ui/react'
import { ChakraStylesConfig } from 'chakra-react-select'

export type ReactSelectStylesOptions = {
  colorMode?: ColorMode
}

export function reactSelectStyles(
  options?: ReactSelectStylesOptions,
): ChakraStylesConfig {
  let bg = 'transparent'
  if (options?.colorMode === 'light') {
    bg = 'white'
  } else if (options?.colorMode === 'dark') {
    bg = 'gray.800'
  }
  return {
    control: (provided: SystemStyleObject) => ({
      ...provided,
      bg,
    }),
    dropdownIndicator: (provided: SystemStyleObject) => ({
      ...provided,
      bg,
      cursor: 'inherit',
      position: 'absolute',
      right: '0px',
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
      borderRadius: '15px',
    }),
    indicatorSeparator: (provided: SystemStyleObject) => ({
      ...provided,
      display: 'none',
    }),
    placeholder: (provided: SystemStyleObject) => ({
      ...provided,
      textAlign: 'center',
    }),
    singleValue: (provided: SystemStyleObject) => ({
      ...provided,
      textAlign: 'center',
    }),
  }
}
