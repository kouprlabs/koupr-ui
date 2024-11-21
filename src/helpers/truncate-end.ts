// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.

export function truncateEnd(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength - 3) + '…'
}
