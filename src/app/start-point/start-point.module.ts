import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPointComponent } from './components/start-point/start-point.component';
import { StartPointRoutingModule } from './start-point-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
