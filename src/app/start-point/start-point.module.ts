import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StartPointComponent } from './components/start-point/start-point.component';
import { StartPointRoutingModule } from './start-point-routing.module';

@NgModule({
  imports: [
    StartPointRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StartPointComponent
  ],
})
export class StartPointModule { }
