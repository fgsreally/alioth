import { Doc, UndoManager, Array as YArray, Map as YMap } from 'yjs'

export class Controller<MapType = any> {
  ydoc = new Doc()
  manager: UndoManager
  map: YMap<MapType>
  constructor(public options: ConstructorParameters<typeof UndoManager>[1] = {}) {
    this.map = this.ydoc.getMap('nodes')
    this.manager = new UndoManager(this.map, this.options)
  }

  undo() {
    this.manager.undo()
  }

  redo() {
    this.manager.redo()
  }

  create(id: string, data: any) {
    this.ydoc.transact(() => {
      const map = new YMap(Object.entries({ ...data, id }))
      const arr = new YArray()

      map.set('children', arr)
      this.map.set(id, map as any)
    })
  }

  insert(parent: string, child: string, index: number) {
    this.ydoc.transact(() => {
      const arr = (this.map.get(parent) as any).get('children')
      arr.insert(index, [child])
    })
  }

  delete(parent: string, child: string, index: number) {
    this.ydoc.transact(() => {
      const arr = (this.map.get(parent) as any).get('children') as YArray<string>

      arr.delete(index, 1)
      this.map.delete(child)
    })
  }

  setAttr(id: string, key: string, value: any) {
    const map = this.map.get(id) as any
    map.set(key, value)
  }
}
