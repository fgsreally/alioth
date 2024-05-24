import { type Ref, getModelForClass, prop } from '@typegoose/typegoose'
import { IsNumber, IsString } from '../utils'
import { ProjectDTO } from './project'
import { CommitDTO } from './commit'
export class BranchDTO {
  @prop({ required: true, ref: () => ProjectDTO })
  @IsString
  project: Ref<ProjectDTO>

  @prop({ required: true })
  @IsNumber
  commit: Ref<CommitDTO>

  @prop({ required: true })
  status: 'loading' | 'running' | 'stop'

  @prop({ default: '' })
  @IsString
  info: string

  @prop({ default: [] })
  files: { filename: string; content: string }[]

  @prop({ default: [] })
  dependences: { name: string; version?: string }[]

  @prop()// pod/container id
  id: string

  @prop()
  address: string // container port or ingress url
}

export const BranchModel = getModelForClass(BranchDTO)
