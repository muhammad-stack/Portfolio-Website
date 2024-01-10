import { type SchemaTypeDefinition } from 'sanity'
import Project from './index'
import Page from './index2'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Project,Page]
}
