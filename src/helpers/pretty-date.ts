// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function prettyDate(date: any): string {
  return new Date(date).toLocaleString()
}
