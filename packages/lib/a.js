const Y = require('yjs')
const origin = 'origin'
const doc = new Y.Doc()
const fragment = doc.getXmlFragment('t')
const undoManager = new Y.UndoManager(fragment, {
  captureTimeout: 0,
  trackedOrigins: new Set([origin]),
})

fragment.observeDeep((events) => {
  events.forEach((evt) => {
    // addition
    evt.changes.added.forEach((item) => {
      item.content.getContent().forEach((cont) => {
        console.log('added: ', cont.nodeName)
      })
    })

    // attribute change
    if (evt.path.length > 0) {
      Array.from(evt.changes.keys.entries()).forEach(([key, change]) => {
        console.log(
          `attrib change. key: '${key}' action: '${change.action}' old: '${
            change.oldValue
          }' new: '${evt.target.getAttribute(key)}'`,
        )
      })
    }

    // deleted
    evt.changes.deleted.forEach((item) => {
      item.content.getContent().forEach((cont) => {
        console.log('deleted: ', cont.nodeName)
      })
    })
  })
})

// create element
console.log('============ CREATE ELEMENT ============')
doc.transact(() => {
  const e = new Y.XmlElement('test-node')
  e.setAttribute('a', '100')
  e.setAttribute('b', '0')
  fragment.insert(fragment.length, [e])
}, origin)

// change one attribute
console.log('============ CHANGE ATTRIBUTE a ============')
doc.transact(() => {
  const e = fragment.get(0)
  e.setAttribute('a', '200')
}, origin)

console.log('============ CHANGE ATTRIBUTE a & b ============')
// change both attributes
doc.transact(() => {
  const e = fragment.get(0)
  e.setAttribute('a', '180')
  e.setAttribute('b', '50')
}, origin)
console.log()

console.log('============ UNDO ============')
undoManager.undo()
console.log('============ UNDO ============')
undoManager.undo()
console.log('============ UNDO ============')
undoManager.undo()

console.log()
console.log('============ REDO ============')
undoManager.redo()
console.log('============ REDO ============')
undoManager.redo()
console.log('============ REDO ============')
undoManager.redo()
