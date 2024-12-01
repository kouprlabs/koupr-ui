// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.

export function relativeDate(date: Date): string {
  const now = new Date()
  const hoursDiff = Math.abs(now.getTime() - date.getTime()) / 3600000
  if (isToday(date)) {
    if (hoursDiff <= 12) {
      return timeAgo(date, now)
    } else {
      return 'Today'
    }
  } else if (isYesterday(date)) {
    return 'Yesterday'
  } else if (date.getFullYear() === now.getFullYear()) {
    return formattedDate(date, 'd MMM')
  } else {
    return formattedDate(date, 'd MMM yyyy')
  }
}

function isToday(date: Date): boolean {
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

function isYesterday(date: Date): boolean {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return date.toDateString() === yesterday.toDateString()
}

function timeAgo(from: Date, to: Date): string {
  const diffMs = to.getTime() - from.getTime()
  const diffHours = Math.floor(diffMs / 3600000)
  const diffMinutes = Math.floor((diffMs % 3600000) / 60000)
  if (diffHours > 0) {
    if (diffHours === 1) {
      return 'an hour ago'
    } else {
      return `${diffHours} hours ago`
    }
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minutes ago`
  } else {
    return 'just now'
  }
}

function formattedDate(date: Date, format: string): string {
  const options: Intl.DateTimeFormatOptions = {}
  if (format.includes('d')) {
    options.day = 'numeric'
  }
  if (format.includes('MMM')) {
    options.month = 'short'
  }
  if (format.includes('yyyy')) {
    options.year = 'numeric'
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
