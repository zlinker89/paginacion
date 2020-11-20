import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { getEpanolPaginatorIntl } from './components/task-list/paginator-es';
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    PaginatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getEpanolPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
