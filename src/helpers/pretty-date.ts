// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function prettyDate(date: any): string {
  return new Date(date).toLocaleString()
}
