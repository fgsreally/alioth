import alasql from 'alasql'
import {cloneDeep} from 'lodash-es'
export function createDataBase(mockData: any[]) {
  const cloneData = cloneDeep(mockData)
  return {
    init: () => {
      mockData = cloneData
    },
    exec: (sqlStr: string) => {
      return alasql(sqlStr, mockData)
    },
  }
}
