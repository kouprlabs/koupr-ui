// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { Tooltip } from '@chakra-ui/react'
import { prettyDate, relativeDate } from '../helpers'

export type RelativeDateProps = {
  date: Date
}

export const RelativeDate = ({ date }: RelativeDateProps) => (
  <Tooltip label={prettyDate(date)}>
    <span>{relativeDate(date)}</span>
  </Tooltip>
)
