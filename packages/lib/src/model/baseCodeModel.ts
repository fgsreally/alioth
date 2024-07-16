import { relative } from 'path'
import { Global, Tag } from 'phecda-core'

import { VirtualNode } from '../core'
import { Export } from './internal'
import { BaseConnectModel } from './baseConnectModel'
import { BaseDocModel } from './baseDocModel'
/**
 * connect client and vite dev server
 */
@Global
@Tag('code')
export class BaseCodeModel {
  outputDir = '.alioth'
  constructor(protected connect: BaseConnectModel, protected doc: BaseDocModel) {

  }

  async generateComponent(node: VirtualNode, filter: (e: Export) => boolean = () => true) {
    const nodes = [node, ...this.doc.findAllChildrens(node)]

    const { dependences, effects } = await this.connect.analyseImport(nodes, filter)
    let code = `
 import {defineComponent,h} from 'vue'
 import {Internal,AliothRenderer} from 'alioth-vue'
 import {useR} from 'phecda-vue'

const _nodes=${JSON.stringify(nodes.map(item => item.toJSON()))}

 export default defineComponent({
 setup(){
 const internal=useR(Internal)
 internal.document.load(_nodes)
 const state={}
 __INTERNAL_IMPORT__
 return ()=>h(AliothRenderer,{node:internal.document.findById(_nodes[0].id),state,renderer:'development'})
 }
 })
 
 `
    code = effects.map(url => `import '${url}'`).join('\n') + code

    for (const url in dependences)
      code = `import {${dependences[url].join(',')}} from '${url}'\n${code}`

    code = code.replace('__INTERNAL_IMPORT__', () => {
      return `
        [${Object.values(dependences).flat().join(',')}].forEach((data)=>{
        internal.import(data.alioth,data)
       if(data.alioth==='state') state[data.key]=data.value
        })
        
        `
    })

    return code
  }

  async generateCode(nodes: VirtualNode[], filter: (e: Export) => boolean = () => true) {
    const { dependences, effects } = await this.connect.analyseImport(nodes, filter)

    return Object.entries(dependences).reduce((p, [url, exports]) => {
      if (exports.length === 0)
        return p
      return `${p}export {${exports.join(',')}} from '${relative(this.outputDir, url)}'\n`
    }, '') + effects.map(url => `import '${relative(this.outputDir, url)}'`).join('\n')
  }
  // setState: (param: { key: string; value: any; meta: any }) => void
}
