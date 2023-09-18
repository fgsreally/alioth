import type { Component } from 'vue'
import type { Command, DefaultEvent } from 'alioth-lib'
import type { Header, Zone } from './model'
export interface BasePreset<T, D> {
  alioth: T
  data: D
}
export interface AliothWidget<Meta> extends BasePreset<'widget', {
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

export interface AliothHeader<P = any> extends BasePreset<'header', Header<P>> {

}

export interface AliothZone<P = any> extends BasePreset<'zone', Zone<P>> {

}

export interface AliothView extends BasePreset<'view', { key: string; component: Component }> {

}

export interface AliothCommand extends BasePreset<'command', Command> {

}

export interface AliothEventStack<E extends DefaultEvent> extends BasePreset<'eventStack', E> {

}
