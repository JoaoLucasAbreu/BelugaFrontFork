import { format } from 'date-fns'

export const formatDate = (date) => {
  const formatedDate = new Date(date)

  return format(
    new Date(formatedDate.getTime() - formatedDate.getTimezoneOffset() * 60000),
    'HH:mm dd/MM',
  )
}
