export class Store<Data = any, Meta extends Record<string, any> = any> {
  protected record = {} as Record<string, { data: Data; meta: Meta }>

  constructor(
    public name: string,
  ) {
  }

  set(key: string, data: any, meta?: any) {
    this.record[key] = { data, meta }
  }

  has(key: string) {
    return key in this.record
  }

  filter(cb: (meta: Meta) => boolean) {
    return this.list().filter(item => cb(this.getMeta(item)))
  }

  get(key: string) {
    return this.record[key]
  }

  list() {
    return Object.keys(this.record)
  }

  values() {
    return Object.values(this.record)
  }

  getData(key: string) {
    return this.get(key).data
  }

  getMeta(key: string) {
    return this.get(key).meta
  }

  del(key: string) {
    delete this.record[key]
  }
}
