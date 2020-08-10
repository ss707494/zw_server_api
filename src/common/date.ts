import { format } from "date-fns"

export const sqlDateFormat = (date) => {
  return format(date, 'yyyy-MM-dd HH:mm:ss')
}
