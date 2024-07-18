import { Mixin } from 'ts-mixer'
import { BaseRenderer, RendererContext } from './renderer'

function createRenderer<R1 extends typeof BaseRenderer, R2 extends typeof BaseRenderer>(r1: R1, r2: R2): (context: RendererContext) => InstanceType<R1> & InstanceType<R2>

function createRenderer<R1 extends typeof BaseRenderer, R2 extends typeof BaseRenderer, R3 extends typeof BaseRenderer>(r1: R1, r2: R2, r3: R3): (context: RendererContext) => InstanceType<R1> & InstanceType<R2> & InstanceType<R3>

function createRenderer<R1 extends typeof BaseRenderer, R2 extends typeof BaseRenderer, R3 extends typeof BaseRenderer, R4 extends typeof BaseRenderer>(r1: R1, r2: R2, r3: R3, r4: R4): (context: RendererContext) => InstanceType<R1> & InstanceType<R2> & InstanceType<R3> & InstanceType<R4>

function createRenderer<R1 extends typeof BaseRenderer, R2 extends typeof BaseRenderer, R3 extends typeof BaseRenderer, R4 extends typeof BaseRenderer, R5 extends typeof BaseRenderer>(r1: R1, r2: R2, r3: R3, r4: R4, r5: R5): (context: RendererContext) => InstanceType<R1> & InstanceType<R2> & InstanceType<R3> & InstanceType<R4> & InstanceType<R5>

function createRenderer(...renderers: any[]): any {
  // @ts-expect-error types trick
  class MixRenderer extends Mixin(...renderers) {

  }
  // @ts-expect-error types trick
  return (data: RendererContext) => new MixRenderer(data)
}

export { createRenderer }
