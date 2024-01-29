import { To } from 'phecda-server'
export const IsString = To((arg) => {
  if (typeof arg !== 'string')
    throw new Error('need a string')
  return arg
})
