import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPointDataComponent } from './components/start-point-data/start-point-data.component';
import { StartPointDataRoutingModule } from './start-point-data-routing.module';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { entityMetadata } from './../../entity-metadata';
import { ArticleResolver } from './store/amaka-articles.resolvers';
import { ArticleDataService } from './services/start-point-data.service';

@NgModule({
  imports: [
    CommonModule,
    StartPointDataRoutingModule
  ],
  declarations: [StartPointDataComponent],
  providers: [
    ArticleResolver,
    ArticleDataService
  ]
})
export class StartPointDataModule {

  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private articleDataService: ArticleDataService
  ) {

    eds.registerMetadataMap(entityMetadata)

    entityDataService.registerService('Article', articleDataService);

  }

}
