import { Doc, UndoManager, Array as YArray, Map as YMap } from 'yjs'

export class Controller<MapType = any> {
  ydoc = new Doc()
  manager: UndoManager
  map: YMap<MapType>
  // origin = 'a-c'// alioth-controller
  constructor(public options: ConstructorParameters<typeof UndoManager>[1] = {}) {
    this.map = this.ydoc.getMap('nodes')
    this.manager = new UndoManager(this.map, this.options)
  }

  toJSON() {
    return this.map.toJSON()
  }

  undo() {
    this.manager.undo()
  }

  redo() {
    this.manager.redo()
  }

  create(id: string, data: any) {
    this.ydoc.transact(() => {
      const map = traverse({ ...data, id, _is_node: true })
      // new YMap(Object.entries({ ...data, id, children: new YArray(), _is_node: true }))
      map.set('children', new YArray())
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

  set(id: string, path: string, value: any) {
    const map = this.map.get(id) as any
    const paths = path.split('.')
    let structure = map
    const key = paths.pop()

    paths.forEach((p) => {
      structure = structure.get(p)
    })

    this.ydoc.transact(() => {
    })
    structure.set(key, traverse(value))
  }
}

function traverse(value: any): any {
  if (Array.isArray(value))
    return YArray.from(value.map(traverse))

  if (typeof value === 'object') {
    const obj = {} as any
    for (const i in value)
      obj[i] = traverse(value[i])

    return new YMap(Object.entries(obj))
  }
  return value
}
