// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
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
