import { Month } from '/@/utils/months'

export const getCurrentMonth = (): Month => {
  return (new Date().getMonth() + 1) as Month
}
