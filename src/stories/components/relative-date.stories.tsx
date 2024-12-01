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

export const Now: Story = {
  args: {
    date: new Date(),
  },
}

export const ThirtyMinutesAgo: Story = {
  args: {
    date: getThirtyMinutesAgo(),
  },
}

export const OneHourAgo: Story = {
  args: {
    date: getOneHourAgo(),
  },
}

export const TwoHoursAgo: Story = {
  args: {
    date: getTwoHoursAgo(),
  },
}

export const TenHoursAgo: Story = {
  args: {
    date: getTenHoursAgo(),
  },
}

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

function getThirtyMinutesAgo(): Date {
  const currentDate = new Date()
  const thirtyMinutesAgo = new Date(currentDate.getTime() - 30 * 60 * 1000)
  return thirtyMinutesAgo
}

function getOneHourAgo(): Date {
  const currentDate = new Date()
  const oneHourAgo = new Date(currentDate.getTime() - 1 * 60 * 60 * 1000)
  return oneHourAgo
}

function getTwoHoursAgo(): Date {
  const currentDate = new Date()
  const oneHourAgo = new Date(currentDate.getTime() - 2 * 60 * 60 * 1000)
  return oneHourAgo
}

function getTenHoursAgo(): Date {
  const currentDate = new Date()
  const elevenHoursAgo = new Date(currentDate.getTime() - 10 * 60 * 60 * 1000)
  return elevenHoursAgo
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
