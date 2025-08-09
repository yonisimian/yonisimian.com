import { Month } from '/@/types/vegetavailable'

export const getCurrentMonth = (): Month => {
  return new Date().toLocaleString('en-US', { month: 'long' }) as Month
}
