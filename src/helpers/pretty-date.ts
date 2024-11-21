// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function prettyDate(date: any): string {
  return new Date(date).toLocaleString()
}
