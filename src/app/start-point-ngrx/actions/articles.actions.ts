import { createAction, props } from '@ngrx/store';

import { Article } from '../interfaces/articles';

export const loadAllArticles = createAction(
  '[Articles Page] Show all articles'
);

export const SaveArticles = createAction(
  '[Articles Page] Articles loaded',
  props<{ articles: Article[] }>()
);
