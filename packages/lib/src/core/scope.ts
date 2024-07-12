export class Scope {
  constructor(public data: Record<string, any> = {}) {

  }

  add(key: string, value: any) {
    this.data[key] = value
  }

  get keys() {
    return Object.keys(this.data)
  }

  get values() {
    return Object.values(this.data)
  }

  extend(data: Record<string, any> = {}) {
    return new Scope({ ...this.data, ...data })
  }
}
