import type { SchemaTypeDefinition } from 'sanity';

import skills from './skills';
import pageInfo from './pageInfo';
import experiences from './experiences';
import socials from './socials';
import projects from './projects';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, pageInfo, experiences, socials, projects],
}
