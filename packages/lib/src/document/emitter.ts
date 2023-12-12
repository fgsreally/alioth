export class Emitter {
  private record: Record<string, Set<Function>> = {}
  on(event: string, cb: Function) {
    if (!this.record[event])
      this.record[event] = new Set()

    this.record[event].add(cb)
  }

  emit(event: string, data: any) {
    if (!this.record[event])
      return
    [...this.record[event]].forEach(cb => cb(data))
  }

  off(event: string, cb: Function) {
    this.record[event].delete(cb)
  }
}

export const emitter = new Emitter()
