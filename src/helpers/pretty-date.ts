// Copyright (c) 2023 Anass Bouassaba.
//
// Use of this software is governed by the MIT License
// included in the file LICENSE in the root of this repository.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function prettyDate(date: any): string {
  return new Date(date).toLocaleString()
}
