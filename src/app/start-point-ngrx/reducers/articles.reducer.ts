import { createReducer, createSelector, on } from "@ngrx/store";
import { ActionTypes } from "../action.types";
import { Article } from "../interfaces/articles";

export interface ArticlesState {
  list: Article[];
}

const initialState: ArticlesState = {
  list: [],
};

export const articleReducer = createReducer(
  initialState,
  on(ActionTypes.LoadArticles, (state, action) => {
      return {
        list: action.articles
      }
  }),
)
