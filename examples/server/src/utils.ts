import { To } from 'phecda-server'
export const IsString = To((arg) => {
  if (typeof arg !== 'string')
    throw new Error('need a string')
  return arg
})

export const IsNumber = To((arg) => {
  if (typeof arg !== 'number')
    throw new Error('need a number')
  return arg
})
