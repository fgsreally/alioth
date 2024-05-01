export class Store<V extends object = any> {
  protected record = {} as Record<string, Record<string, V>>

  constructor(
    public category: string,
  ) {
    this.init('default')
  }

  set(mode: string, key: string, value: any) {
    if (!mode)
      mode = 'default'
    if (!key)
      key = 'default'
    this.record[mode][key] = value
  }

  init(mode: string) {
    if (!this.record[mode])
      this.record[mode] = {}
  }

  get(mode: string, key: string) {
    let data = this.record[mode]?.[key] || this.record.default?.[key]
    if (!data)
      data = this.record[mode]?.default || this.record.default?.default

    if (!data)
      throw new Error(`should set Store "${this.category}" before get`)
    return data
  }

  del(mode: string, key: string) {
    delete this.record[mode][key]
  }
}
