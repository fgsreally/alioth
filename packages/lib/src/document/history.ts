// import { EventEmitter } from 'eventemitter3'
// import { ALIOTH_EVENT } from '../common'
// import type { NodeAttrs, VirtualNode } from './node'
// interface AppendEvent {
//   node: VirtualNode<any>
//   parent: VirtualNode<any>
//   type: 'append'
//   timestamp: number
// }

// interface RemoveEvent {
//   node: VirtualNode<any>
//   index: number
//   parent: VirtualNode<any>
//   type: 'remove'
//   timestamp: number
// }

// interface PropertyEvent {
//   type: 'property'
//   node: VirtualNode<any>
//   key: PropertyKey
//   value: any
//   timestamp: number

// }
// interface InsertEvent {
//   type: 'insert'
//   index: number
//   parent: VirtualNode<any>
//   timestamp: number

// }
//    type HistoryEvent = PropertyEvent | RemoveEvent | AppendEvent | InsertEvent

// export class HistoryController {
//   undoStack: HistoryEvent[][] = []
//   redoStack: HistoryEvent[][] = []
//   recordingEvents: HistoryEvent[]
//   isRecording = false
//   emitter = new EventEmitter()
//   private recordLayer: number

//   get isEndPoint() {
//     return this.redoStack.length === 0
//   }

//   recordStart(event: HistoryEvent | void) {
//     if (this.isRecording === false) {
//       if (event)
//         this.redoStack = []
//       this.recordingEvents = []
//       this.recordLayer = 0
//       this.isRecording = true
//     }
//     this.recordLayer++
//     event && this.recordingEvents.push(event)
//   }

//   recordEnd(category: 'undo' | 'redo') {
//     if (--this.recordLayer === 0) {
//       (category === 'undo' ? this.undoStack : this.redoStack).push(this.recordingEvents)
//       this.isRecording = false
//     }
//   }

//   undo() {
//     const events = this.undoStack.pop()
//     this.emitter.emit(ALIOTH_EVENT.UNDO)

//     if (events) {
//       this.recordStart()
//       // this.redoStack.push(events)
//       for (const ev of events)
//         this.switchAction(ev, 'redo')

//       this.recordEnd('redo')
//     }
//   }

//   redo() {
//     const events = this.redoStack.pop()
//     this.emitter.emit(ALIOTH_EVENT.REDO)

//     if (events) {
//       this.recordStart()
//       for (const ev of events)
//         this.switchAction(ev, 'undo')
//       this.recordEnd('undo')
//     }
//   }

//   switchAction(ev: HistoryEvent, category: 'redo' | 'undo') {
//     switch (ev.type) {
//       case 'remove':
//         ev.parent._insert(ev.node, ev.index, category)
//         break
//       case 'property':
//         ev.node._setAttribute(ev.key as unknown as keyof NodeAttrs, ev.value, category)
//         break
//       case 'insert' :
//         ev.parent._remove(ev.index, category)
//     }
//   }

//   clear() {
//     this.redoStack = []
//     this.undoStack = []
//   }
// }
