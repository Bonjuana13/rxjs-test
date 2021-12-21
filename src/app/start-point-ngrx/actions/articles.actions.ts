import { createAction, props } from "@ngrx/store";
import { Article } from "../interfaces/articles";

export const LoadArticles = createAction(
  "[Articles Page] Articles loaded",
  props<{articles: Article[]}>()
);
