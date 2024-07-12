export class Store<Data = any, Meta extends Record<string, any> = any> {
  protected record = {} as Record<string, { data: Data; meta: Meta }>

  constructor(
    public name: string,
  ) {
  }

  get data(): Record<string, Data> {
    return new Proxy(this.record as any, {
      get(target, p) {
        // eslint-disable-next-line no-prototype-builtins
        if (target.hasOwnProperty(p))
          return target[p].data
        return target[p]
      },
    })
  }

  get meta() {
    return new Proxy(this.record as any, {
      get(target, p) {
        // eslint-disable-next-line no-prototype-builtins
        if (target.hasOwnProperty(p))
          return target[p].meta
        return target[p]
      },
    })
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
