// Copyright 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE.md file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.

export function truncateEnd(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength - 3) + '…'
}
