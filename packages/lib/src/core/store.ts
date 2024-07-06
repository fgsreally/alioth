export class Store<Data = any, Meta extends Record<string, any> = any> {
  protected data = {} as Record<string, Record<string, Data>>
  protected meta = {} as Record<string, Record<string, Meta>>

  constructor(
    public category: string,
  ) {
    this.init('default')
  }

  set(mode: string, key: string, data: any, meta?: any) {
    this.data[mode][key] = data
    this.meta[mode][key] = meta || {}
  }

  init(mode: string) {
    if (!this.data[mode])
      this.data[mode] = {}
    if (!this.meta[mode])
      this.meta[mode] = {}
  }

  has(mode: string, key: string) {
    return this.data[mode] && key in this.data[mode]
  }

  getData(mode: string, key: string) {
    return this.data[this.has(mode, key) ? mode : 'default'][key]
  }

  getMeta(mode: string, key: string) {
    return this.meta[this.has(mode, key) ? mode : 'default'][key]
  }

  del(mode: string, key: string) {
    delete this.data[mode][key]
    delete this.meta[mode][key]
  }
}
