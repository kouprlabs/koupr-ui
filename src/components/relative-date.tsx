// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.
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
