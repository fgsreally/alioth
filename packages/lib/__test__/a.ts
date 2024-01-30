import { ClientBridge, Controller, VirtualDocument, VirtualNode } from '../src/document'

function wait(time = 3000) {
  return new Promise(resolve => setTimeout(resolve, time))
}

function createSuite() {
  const doc1 = new VirtualDocument()
  const doc2 = new VirtualDocument()

  const controller1 = new Controller(doc1)
  const controller2 = new Controller(doc2)

  class MockBridge extends ClientBridge {
    send(_event: any) {
      console.log(_event, 'real event')
    }
  }
  const bridge1 = new MockBridge(controller1)
  const bridge2 = new MockBridge(controller2)
  bridge1.send = (e) => {
    setTimeout(() => {
      console.log(1, e)
      bridge2.handle(e)// fast
    }, 10)
  }
  bridge2.send = (e) => {
    setTimeout(() => {
      bridge1.handle(e)// slow
    }, 20)
  }

  return { bridge1, bridge2, doc1, doc2, controller1, controller2 }
}

async function start() {
  const { doc1, doc2, controller1 } = createSuite()
  const node1 = new VirtualNode({ data: '1' }, '1')
  doc1.insert(node1, doc1.root)

  node1.xxx = true
  await wait()
  const newNode = doc2.findById('1')!

  doc2.set(newNode, 'data', '2')
  doc1.set(node1, 'data', '3')
  console.log(newNode.attrs === node1.attrs)
  console.log('set', newNode.attrs.data)

  await wait()
  console.log('set', newNode.attrs.data)
}

start()
