// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.

export function truncateMiddle(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }
  const half = Math.floor((maxLength - 3) / 2)
  return text.slice(0, half) + '…' + text.slice(text.length - half)
}
