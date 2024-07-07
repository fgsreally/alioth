export class Store<Data = any, Meta extends Record<string, any> = any> {
  protected record = {} as Record<string, Record<string, { data: Data; meta: Meta }>>

  constructor(
    public name: string,
  ) {
    this.init('default')
  }

  set(key: string, environment: string, data: any, meta?: any) {
    this.record[environment][key] = { data, meta }
  }

  init(environment: string) {
    this.record[environment] = {}
  }

  has(key: string, environment: string) {
    return !!this.record[environment]?.[key]
  }

  get(key: string, environment: string) {
    return this.record[environment]?.[key] || this.record.default[key]
  }

  list(environment: string) {
    return Object.keys(this.record[environment])
  }

  values(environment: string) {
    return Object.values(this.record[environment])
  }

  getData(key: string, environment: string) {
    return this.get(environment, key).data
  }

  getMeta(key: string, environment: string) {
    return this.get(environment, key).meta
  }

  del(key: string, environment: string) {
    delete this.record[environment][key]
  }
}
