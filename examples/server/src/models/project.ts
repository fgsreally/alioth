import { getModelForClass, prop } from '@typegoose/typegoose'
import { IsString } from '../utils'
export class ProjectDTO {
  @prop({ required: true })
  @IsString
    name: string

  @prop({ required: true })
  @IsString
  namespace: string
}

export const ProjectModel = getModelForClass(ProjectDTO)
