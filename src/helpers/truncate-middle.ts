// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// See the LICENSE file in the root of this repository for details,
// or visit <https://opensource.org/licenses/MIT>.

export function truncateMiddle(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }
  const half = Math.floor((maxLength - 3) / 2)
  return text.slice(0, half) + '…' + text.slice(text.length - half)
}
