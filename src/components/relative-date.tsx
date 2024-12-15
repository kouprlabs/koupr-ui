// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
import { prettyDate, relativeDate } from '../helpers'
import { Tooltip } from './ui/tooltip'

export type RelativeDateProps = {
  date: Date
}

export const RelativeDate = ({ date }: RelativeDateProps) => (
  <Tooltip content={prettyDate(date)}>
    <span>{relativeDate(date)}</span>
  </Tooltip>
)
