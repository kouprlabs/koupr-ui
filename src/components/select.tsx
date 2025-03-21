// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { ComponentProps, useMemo } from 'react'
import { SystemStyleObject, useColorMode } from '@chakra-ui/react'
import {
  Select as ChakraReactSelect,
  ChakraStylesConfig,
} from 'chakra-react-select'
import { GroupBase } from 'react-select'

export const Select = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: ComponentProps<typeof ChakraReactSelect<Option, IsMulti, Group>>,
) => {
  const { colorMode } = useColorMode()
  const chakraStyles = useMemo(() => {
    let bg = 'transparent'
    if (colorMode === 'light') {
      bg = 'white'
    } else if (colorMode === 'dark') {
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
    } as ChakraStylesConfig<Option, IsMulti, Group>
  }, [colorMode])
  return (
    <ChakraReactSelect<Option, IsMulti, Group>
      {...props}
      chakraStyles={chakraStyles}
    />
  )
}
