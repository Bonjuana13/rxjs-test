import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { entityConfig } from 'src/entity-metadata';
import { environment } from 'src/environments/environment';

const articleDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.apiUrl
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: articleDataServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
