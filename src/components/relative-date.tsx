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
