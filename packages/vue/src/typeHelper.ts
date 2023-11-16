import type { Component } from 'vue'
import type { Command, DefaultEvent, VirtualNode } from 'alioth-lib'
import type { Header, Zone } from './model'
import type { RenderFn } from './register'
export interface BasePreset<T, D> {
  alioth: T
  data: D
}

export type NodeAttrs = Record<string, any>
export interface AliothWidget<Meta = any> extends BasePreset<'widget', {
  category: string
  key: string
  component: Component
  meta?: Meta
}> {

}
export interface AliothState extends BasePreset<'state', {
  key: string
  value: any
  meta: any
}> {

}

export interface AliothRenderFn extends BasePreset<'setRenderFn', {
  mode: string
  fn: RenderFn
}> {

}

export interface AliothNodeEvent extends BasePreset<'node_event', {
  event: 'create'
  cb: (arg: { node: VirtualNode<NodeAttrs> }) => void
} | {
  event: 'insert'
  cb: (arg: { parent: VirtualNode<NodeAttrs>; child: VirtualNode<NodeAttrs>; index: number }) => void
} | {
  event: 'remove'
  cb: (arg: { node: VirtualNode<NodeAttrs> }) => void
}> {

}
export interface AliothHeader<P = any> extends BasePreset<'header', Header<P>> {

}

export interface AliothZone<P = any> extends BasePreset<'zone', Zone<P>> {

}

export interface AliothView extends BasePreset<'view', { key: string; component: Component }> {

}

export interface AliothCommand extends BasePreset<'command', Command> {

}

export interface AliothEvent<E extends DefaultEvent = DefaultEvent> extends BasePreset<'event', E> {

}
