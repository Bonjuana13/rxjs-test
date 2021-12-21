import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { StartPointNgrxComponent } from './components/start-point-ngrx/start-point-ngrx.component';
import { ChildComponent } from './components/child/child.component';
import { articleReducer } from './reducers/articles.reducer';
import { StartPointNgrxRoutingModule } from './start-point-ngrx-routing.module';

@NgModule({
  imports: [
    StartPointNgrxRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('articles', articleReducer),
  ],
  declarations: [
    StartPointNgrxComponent,
    ChildComponent
  ],
})
export class StartPointNgrxModule { }
