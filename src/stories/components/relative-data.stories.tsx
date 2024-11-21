// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.
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
