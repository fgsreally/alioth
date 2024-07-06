import { type Ref, getModelForClass, prop } from '@typegoose/typegoose'
import { IsString } from '../utils'
import { NamespaceDTO } from './namespace'
export class ProjectDTO {
  @prop({ required: true })
  @IsString
  name: string

  @prop({ required: true, ref: NamespaceDTO })
  @IsString
  namespace: Ref<NamespaceDTO>

  @prop({ default: {} })
  data: any

  @prop({ enum: ['loading', 'finish'] })
  status: 'loading' | 'finish'
}

export const ProjectModel = getModelForClass(ProjectDTO)
