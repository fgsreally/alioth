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
    this.record[mode][key] = value
  }

  init(mode: string) {
    if (!this.record[mode])
      this.record[mode] = {}
  }

  get(mode: string) {
    const data = this.record[mode] || this.record.default
    if (!data)
      throw new Error(`should set Store "${this.category}" mode(${mode} or default) before get`)
    return data
  }

  del(mode: string, key: string) {
    delete this.record[mode][key]
  }
}
