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

  @prop({ default: [] })
  files: { filename: string; content: string }[]

  @prop({ required: true })
  running: boolean

  @prop({ default: '' })
  @IsString
  info: string

  @prop({ required: true })// pod/container id
  id: string

  @prop({ required: true })
  port: string
}

export const BranchModel = getModelForClass(BranchDTO)
