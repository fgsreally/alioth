import { setState as s } from './connect'
export interface ImportRecord { description: string }
export class ImportState {
  constructor(protected setState: (key: string, value: any) => void = s) {

  }

  records: Record<string, ImportRecord> = {}

  register(key: string, value: any, record: ImportRecord) {
    this.setState(key, value)
    this.records[key] = record
  }
}
