import { EntityMetadataMap } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Article: {},
};

const pluralNames = { Article: 'Articles/List' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
