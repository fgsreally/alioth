import { getModelForClass, prop } from '@typegoose/typegoose'
export class NamespaceDTO {
  id: string
  @prop({ default: {} })
  env: Record<string, string>
}

export const NamespaceModel = getModelForClass(NamespaceDTO)
