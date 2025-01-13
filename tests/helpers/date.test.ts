import {
  formatDate,
  formatDateTime,
  formatDateTimeComplete,
} from '../../src/helpers'

describe('Helpers - Date formatting', () => {
  it('should format the date correctly with formatDate', () => {
    const date = new Date(2021, 0, 1) // 1st January 2021
    const result = formatDate(date)
    expect(result).toBe('01/01/2021')
  })

  it('should format the date and time correctly with formatDateTime', () => {
    const date = new Date(2021, 0, 1, 12, 30, 15) // 1st January 2021, 12:30:15
    const result = formatDateTime(date)
    expect(result).toBe('01/01/2021 12:30:15')
  })

  it('should format the date, time, and milliseconds correctly with formatDateTimeComplete', () => {
    const date = new Date(2021, 0, 1, 12, 30, 15, 123) // 1st January 2021, 12:30:15.123
    const result = formatDateTimeComplete(date)
    expect(result).toBe('01/01/2021 12:30:15.123')
  })

  it('should handle single-digit days and months correctly', () => {
    const date = new Date(2021, 8, 5) // 5th September 2021
    const result = formatDate(date)
    expect(result).toBe('05/09/2021')
  })

  it('should handle leading zeros in time correctly', () => {
    const date = new Date(2021, 0, 1, 1, 5, 3) // 1st January 2021, 01:05:03
    const result = formatDateTime(date)
    expect(result).toBe('01/01/2021 01:05:03')
  })

  it('should handle leading zeros in milliseconds correctly', () => {
    const date = new Date(2021, 0, 1, 1, 5, 3, 5) // 1st January 2021, 01:05:03.005
    const result = formatDateTimeComplete(date)
    expect(result).toBe('01/01/2021 01:05:03.5')
  })
})
