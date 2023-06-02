import type { NodeSchema } from '@/engine/schema'
import {createRenderComponent} from 'alioth-lib'
import {Register} from '@/engine/register'
export const RenderBlock=createRenderComponent<NodeSchema,Register>()