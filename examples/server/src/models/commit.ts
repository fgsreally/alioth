import { type Ref, getModelForClass, prop } from '@typegoose/typegoose'
import { ProjectDTO } from './project'
export class CommitDTO {
  @prop({ required: true, ref: () => ProjectDTO })
  project: Ref<ProjectDTO>

  @prop({ ref: () => CommitDTO })
  from?: Ref<CommitDTO>

  @prop({ required: true })
  status: 'loading' | 'finish'

  @prop()
  image: string

  @prop({ default: [] })
  files: { filename: string; content: string }[]

  @prop({ default: [] })
  dependences: { name: string; version?: string }[]

  @prop({ default: '' })
  info: string
}

export const CommitModel = getModelForClass(CommitDTO)
