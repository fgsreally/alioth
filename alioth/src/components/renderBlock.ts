import { createRenderComponent } from 'alioth-lib'
import type { NodeSchema } from '@/engine/schema'
import type { Register } from '@/engine/register'
export const RenderBlock = createRenderComponent<NodeSchema, Register>()
