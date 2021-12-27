import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Article } from './../interfaces/articles';

@Injectable({ providedIn: 'root' })
export class ArticleEntityService extends EntityCollectionServiceBase<Article> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {

    super('Article', serviceElementsFactory);

  }

}
