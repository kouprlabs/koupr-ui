// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import { RelativeDate } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RelativeDate> = {
  title: 'Components/Relative Date',
  component: RelativeDate,
}

export default meta
type Story = StoryObj<typeof RelativeDate>

export const Yesterday: Story = {
  args: {
    date: getYesterday(),
  },
}

export const TwoDaysAgo: Story = {
  args: {
    date: getTwoDaysAgo(),
  },
}

export const LastYear: Story = {
  args: {
    date: getLastYear(),
  },
}

function getYesterday(): Date {
  const today = new Date()
  const past = new Date(today)
  past.setDate(today.getDate() - 1)
  return past
}

function getTwoDaysAgo(): Date {
  const today = new Date()
  const past = new Date(today)
  past.setDate(today.getDate() - 2)
  return past
}

function getLastYear(): Date {
  const today = new Date()
  const past = new Date(today)
  past.setDate(today.getDate() - 365)
  return past
}
