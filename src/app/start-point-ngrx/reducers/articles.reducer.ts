import { createReducer, on } from '@ngrx/store';

import { ActionTypes } from '../action.types';
import { Article } from '../interfaces/articles';

export interface ArticlesState {
  list: Article[];
}

const initialState: ArticlesState = {
  list: [],
};

export const articleReducer = createReducer(
  initialState,
  on(ActionTypes.SaveArticles, (state, action) => {
    return {
      list: action.articles
    };
  }),
);
