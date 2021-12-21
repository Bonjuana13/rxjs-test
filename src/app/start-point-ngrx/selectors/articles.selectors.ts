import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './../reducers/articles.reducer';


export const selectArticlesState =
    createFeatureSelector<ArticlesState>("articles");


export const articles = createSelector(
    selectArticlesState,
    articles => articles.list
);
