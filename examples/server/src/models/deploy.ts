import { type Ref, getModelForClass, prop } from '@typegoose/typegoose'
import { ProjectDTO } from './project'
import { CommitDTO } from './commit'
export class DeployDTO {
  @prop({ required: true, ref: () => ProjectDTO })
  project: Ref<ProjectDTO>

  @prop({ required: true, ref: () => ProjectDTO })
  commit: Ref<CommitDTO>

  @prop({ default: '' })
  info: string

  @prop({ required: true })//  deployment/container Id
  id: string

  @prop({ required: true })
  port: string
}

export const DeployModel = getModelForClass(DeployDTO)
