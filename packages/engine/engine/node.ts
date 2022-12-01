import { cloneDeep, get, pick, set } from 'lodash-es'
import { nanoid } from 'nanoid'
import type {
  Ref,
  UnwrapNestedRefs,
  UnwrapRef,
} from 'vue'
import {

  reactive,
  ref,
} from 'vue'
import type {
  EngineConfig,
  basicBlock,
  defaultActState,
  inputBlock,
  nodeState,
} from '../types/types'
// import { diffData } from "../utils/diff";

/**
 *
 *
 * @export
 * @class Engine
 * @template DataState
 * @template ActState
 * @template Container
 */
export class Engine<
  BlockType extends basicBlock<BlockType>, DataState extends nodeState<BlockType> = nodeState<BlockType>, ActState extends defaultActState<BlockType, DataState> = defaultActState<
    BlockType,
    DataState
  >, // 单例，操作中的block与dom
> {
  source: Ref<UnwrapRef<DataState & { uuid: string }>>
  blockMap: UnwrapNestedRefs<Map<string, BlockType>>
  oldBlockMap: Map<string, BlockType>
  oldSource: any
  actState: UnwrapNestedRefs<ActState>
  snapshotList: string[]
  dataStack: DataState[] = []
  history: any[] = []
  isFixed = false
  historyLength: number
  error: Function
  // scope: EffectScope;
  allowFullHistory: boolean
  allowCustomRecord: boolean
  historyStack: HistoryStack
  // ruleMap: Map<string, { path: string; getter: ComputeGetter }[]> = new Map();
  constructor(
    data: DataState,
    config: EngineConfig = {},
    error: Function = (msg: string) => console.error(msg),
  ) {
    // this.scope = effectScope();
    this.source = ref<DataState & { uuid: string }>({ ...data, uuid: '1' })

    const actState = {
      clickBlock: null,
      hoverBlock: null,
      container: this.source.value,
    }
    config.actionBlocks?.forEach((item) => {
      (actState as any)[item] = null
    })
    this.actState = reactive<any>(actState)
    this.historyStack = new HistoryStack(config.historyLength)
    this.error = error

    this.blockMap = reactive(new Map())
    this.blockMap.set('1', this.source.value as any)

    this.snapshotList = config.snapshotList || []
    this.historyLength = config.historyLength || 10
    this.allowFullHistory = config.allowFullHistory || false
    this.allowCustomRecord = config.allowCustomRecord || false
  }

  // setRule(key: string, path: string, cb: ComputeGetter) {
  //   if (!this.ruleMap.has(key)) {
  //     this.ruleMap.set(key, []);
  //   }
  //   this.ruleMap.get(key)?.push({ path, getter: cb });
  // }
  fixed() {
    this.isFixed = true
  }

  unfixed() {
    this.isFixed = false
  }

  // record(historyData: any, data?: DataState) {
  //   if (!this.allowCustomRecord) return;
  //   if (
  //     this.allowFullHistory &&
  //     data &&
  //     this.dataStack.length < this.historyLength
  //   ) {
  //     this.dataStack.push(cloneDeep(data));
  //   }
  //   this.history.push(historyData);
  // }
  keep(BlockOrID: BlockType | string, properties: string[] | { [key: string]: any }) {
    const block = (typeof BlockOrID === 'string' ? this.blockMap.get(BlockOrID) : BlockOrID) as BlockType
    const lastValue: any = {}
    if (Array.isArray(properties)) {
      for (const i of properties)
        lastValue[i] = cloneDeep(get(block, i))

      this.record([{ id: block.uuid, type: 'property', value: lastValue }])
    }
    else {
      this.record([{ id: block.uuid, type: 'property', value: properties }])
    }
  }

  action(BlockOrID: BlockType | string, properties: { [key: string]: any }) {
    const block = (typeof BlockOrID === 'string' ? this.blockMap.get(BlockOrID) : BlockOrID) as BlockType
    const lastValue: any = {}
    for (const i in properties) {
      lastValue[i] = cloneDeep(get(block, i))
      set(block, i, properties[i])
    }
    this.record([{ id: block.uuid, type: 'property', value: lastValue }])
  }

  back() {
    this.historyStack.back()?.forEach((item) => {
      const block = this.find(item.id) as BlockType

      switch (item.type) {
        case 'property':
          for (const i in item.value)
            set(block, i, item.value[i])

          return
        case 'addNode':
          this._remove(block, this.parent(block) as BlockType)
          return
        case 'delNode':
          this._add(item.value as any, item.id)
      }
    })
  }

  record(params: action) {
    this.historyStack.add(params)
  }

  clearHistory() {
    this.historyStack.clear()
  }

  track(num?: number) {
    return this.dataStack[num || this.dataStack.length - 1]
  }

  // clearRecord(num?: number) {
  //   if (!num) {
  //     this.dataStack = [];
  //   } else {
  //     this.dataStack.splice(0, num);
  //   }
  // }
  // clearHistory(num?: number) {
  //   if (!num) {
  //     this.history = [];
  //   } else {
  //     this.history.splice(0, num);
  //   }
  // }
  get data() {
    return this.source.value as DataState
  }

  get container() {
    return this.actState.container as DataState
  }

  get clickBlock() {
    return this.actState.clickBlock as BlockType
  }

  get hoverBlock() {
    return this.actState.hoverBlock as BlockType
  }

  get storeBlock() {
    return this.actState.storeBlock as BlockType
  }

  updateContainer() {
    this.actState.container = this.source.value
  }

  $select(Block: BlockType | string, actObj: keyof ActState = 'clickBlock') {
    if (typeof Block === 'string')
      Block = (this as any).find(Block);

    (this.actState as any)[actObj] = Block
  }

  $cancel(actObj: keyof ActState | (keyof ActState)[] = 'clickBlock') {
    if (Array.isArray(actObj)) {
      actObj.forEach((item) => {
        (this.actState as any)[item] = null
      })
    }
    else {
      (this.actState as any)[actObj] = null
    }
  }

  $update(
    properties: { [key: string]: any },
    actObj: keyof ActState = 'clickBlock',
  ) {
    this.action((this.actState as any)[actObj], properties)
  }

  $add(Block: inputBlock<BlockType>, actObj: keyof ActState = 'clickBlock') {
    if (this.isFixed) {
      this.error('it has been fixed')
      return
    }
    (Block as any).parent = (this.actState as any)[actObj];
    (this.actState as any)[actObj]?.blocks.push(Block)
    this.record([{ id: (this.actState as any)[actObj].uuid, type: 'addNode' }])
  }

  $remove(actObj: keyof ActState = 'clickBlock') {
    if (this.isFixed) {
      this.error('it has been fixed')
      return
    }
    const curBlock = (this.actState as any)[actObj];

    (this.parent((this.actState as any)[actObj]) as BlockType).blocks = (this.parent((this.actState as any)[actObj]) as BlockType).blocks.filter(item => item !== curBlock)
    this.record([{ id: (this.actState as any)[actObj].uuid, type: 'delNode', value: cloneDeep((this.actState as any)[actObj]) }])
  }
  // $removeAll(id: string[], actObj: keyof ActState = "clickBlock") {
  //   if (this.isFixed) {
  //     this.error("it has been fixed");
  //     return;
  //   }
  //   (this.actState as any)[actObj].blocks = (this.actState as any)[
  //     actObj
  //   ].blocks.filter((block: BlockType) => !id.includes(block.uuid));
  // }

  $reuseShot(name: string, actObj: keyof ActState = 'clickBlock') {
    (this.actState as ActState)[actObj] = {
      ...(this.actState as ActState)[actObj],
      ...(this.actState as any)[actObj].snapshot[name],
    }
  }

  $snapshot(name: string, actObj: keyof ActState = 'clickBlock') {
    if (!(this.actState as any)[actObj].snapshot)
      (this.actState as any)[actObj].snapshot = {};
    (this.actState as any)[actObj].snapshot[name] = cloneDeep(
      pick((this.actState as ActState)[actObj], this.snapshotList),
    )
  }

  load(data: DataState) {
    if (this.isFixed) {
      this.error('it has been fixed')
      return
    }
    this.blockMap.clear()
    // for json storage
    this.clearHistory();
    (this.source as any).value = data
    this.blockMap.set('1', this.source.value as any)
    this.traverse(data, (block) => {
      this.blockMap.set(block.uuid, block)
    })
  }

  _create(Block: Partial<BlockType>) {
    this.blockMap.set(Block.uuid as string, Block as any)
    // this._init(Block);
    return this
  }

  find(BlockOrID: string | BlockType) {
    if (typeof BlockOrID === 'string')
      return this.blockMap.get(BlockOrID)

    else
      return this.blockMap.has(BlockOrID.uuid) ? BlockOrID : false
  }

  parent(BlockOrID: string | BlockType) {
    const block = this.find(BlockOrID)
    return block && this.blockMap.get(block.parent)
  }

  _add(
    Block: Partial<BlockType>,
    BlockOrID?: string | BlockType,
  ) {
    this._create(Block)

    if (!BlockOrID) {
      this.source.value.blocks.push(Block as any)
      Block.parent = '1'
    }
    else {
      if (typeof BlockOrID === 'string') {
        const parent = this.blockMap.get(BlockOrID)

        if (parent) {
          Block.parent = BlockOrID
          parent.blocks.push(Block as BlockType)
        }
      }
      else {
        BlockOrID.blocks.push(Block as BlockType)
        Block.parent = BlockOrID.uuid
      }
    }

    return this
  }

  add(Block: Partial<BlockType> | Partial<BlockType>[],
    BlockOrID?: string | BlockType) {
    if (this.isFixed) {
      this.error('it has been fixed')
      return
    }
    if (Array.isArray(Block)) {
      Block.forEach((block) => {
        this._add(block, BlockOrID)
      })
      this.record(Block.map((item) => {
        return { type: 'addNode', id: item.uuid as string }
      }))
    }
    else {
      this._add(Block, BlockOrID)
      this.record([{ type: 'addNode', id: Block.uuid as string }])
    }
  }
  // _insert(
  //   Block: Partial<BlockType> | Partial<BlockType>[],
  //   BlockOrID: string | BlockType,
  //   type: "before" | "after"
  // ) {
  //   if (this.isFixed) {
  //     this.error("it has been fixed");
  //     return;
  //   }
  //   let keyBlock = this.find(BlockOrID);
  //   if (!keyBlock) return false;
  //   let parent = this.blockMap.get((keyBlock as BlockType).parent);

  //   (parent as BlockType).blocks.splice(
  //     (parent as BlockType).blocks.findIndex(
  //       (block) => block.uuid === (keyBlock as BlockType).uuid
  //     ) +
  //       type ===
  //       "before"
  //       ? 0
  //       : 1,
  //     0,
  //     Array.isArray(Block) ? { ...(Block as any) } : Block
  //   );
  //   if (Array.isArray(Block)) {
  //     // this.record(
  //     //   {
  //     //     type: "addGroup",
  //     //     node: Block,
  //     //     id: (parent as BlockType).uuid,
  //     //     timestamp: Date.now(),
  //     //   },
  //     //   this.data
  //     // );
  //     Block.forEach((block) => {
  //       block.parent = (parent as BlockType).uuid;
  //       this._create(block);
  //     });
  //   } else {
  //     // this.record(
  //     //   {
  //     //     type: "add",
  //     //     node: Block,
  //     //     id: (parent as BlockType).uuid,
  //     //     timestamp: Date.now(),
  //     //   },
  //     //   this.data
  //     // );
  //     Block.parent = (parent as BlockType).uuid;
  //     this._create(Block);
  //   }

  //   return this;
  // }
  // insertBefore(
  //   Block: Partial<BlockType> | Partial<BlockType>[],
  //   BlockOrID: string | BlockType
  // ) {
  //   this._insert(Block, BlockOrID, "before");
  // }
  // insertAfter(
  //   Block: Partial<BlockType> | Partial<BlockType>[],
  //   BlockOrID: string | BlockType
  // ) {
  //   this._insert(Block, BlockOrID, "after");
  // }

  traverse(Block: BlockType | DataState, cb: (block: BlockType) => void) {
    Block.blocks.forEach((item) => {
      cb(item)
      this.traverse(item, cb)
    })
  }

  clone(Block: BlockType) {
    const cloneBlock = cloneDeep(Block)
    this.traverse(cloneBlock, (item) => {
      item.uuid = nanoid()
    })
    return cloneBlock
  }

  _remove(Block: BlockType, parent: BlockType) {
    this.traverse(Block, (block: BlockType) => {
      this.blockMap.delete(block.uuid)
    })
    const uuid = Block.uuid
    parent.blocks = parent.blocks.filter((block: BlockType) => {
      return block.uuid !== uuid
    })
    this.blockMap.delete(Block.uuid)
  }

  remove(BlockOrID: string | BlockType) {
    if (this.isFixed) {
      this.error('it has been fixed')
      return
    }
    const Block = this.find(BlockOrID) as BlockType
    const parent = this.find(Block.parent) as any
    if (Block && parent) {
      this._remove(Block, parent)
      this.record([{ id: parent.uuid, value: cloneDeep(Block), type: 'delNode' }])
    }
  }

  removeAll(BlockOrID: string | BlockType) {
    if (this.isFixed) {
      this.error('it has been fixed')
      return
    }
    const Block = this.find(BlockOrID) as BlockType
    if (Block) {
      this.record(Block.blocks.map((item) => {
        this._remove(item, Block)
        return { id: Block.uuid, value: item, type: 'delNode' }
      }))
    }
  }

  // watch(excludes: string[] = ["uuid", "blocks", "parent", "key"]) {
  //   this.scope.run(() => {
  //     this.oldSource = cloneDeep(this.source.value);
  //     this.oldBlockMap = cloneDeep(this.blockMap);
  //     watch(
  //       () => this.source,
  //       () => {
  //         if (this.oldSource && this.oldBlockMap) {
  //           let r: string[] = [];
  //           if (this.oldBlockMap.size > this.blockMap.size) {
  //             this.oldBlockMap.forEach((value, key) => {
  //               if (!this.blockMap.has(key)) {
  //                 r.push(key);
  //               }
  //             });
  //             this.record({ type: "delNode", r });
  //           } else {
  //             if (this.oldBlockMap.size < this.blockMap.size) {
  //               this.blockMap.forEach((_, key) => {
  //                 if (!this.oldBlockMap.has(key)) {
  //                   r.push(key);
  //                 }
  //               });
  //               this.record({ type: "addNode", r });
  //             } else {
  //               let r = diffData(
  //                 this.oldSource.blocks,
  //                 this.source.value.blocks,
  //                 excludes
  //               );
  //               if (Object.keys(r).length > 0) {
  //                 this.record({ type: "propertyChange", r });
  //               }
  //             }
  //           }
  //         }
  //         this.oldSource = cloneDeep(this.source.value);
  //         this.oldBlockMap = cloneDeep(this.blockMap);
  //       },
  //       { deep: true }
  //     );
  //   });
  // }
  // unwatch() {
  //   this.scope.stop();
  // }
}

type action = { id: string; type: string; value?: { [key: string]: any } }[]
export class HistoryStack {
  stack: action[] = []
  constructor(public stackLength: number = 20) {
  }

  add(params: action) {
    this.stack.unshift(params)
    if (this.stack.length === this.stackLength)
      this.stack.pop()
  }

  back() {
    return this.stack.shift()
  }

  clear() {
    this.stack = []
  }

  get length() {
    return this.stack.length
  }
}
