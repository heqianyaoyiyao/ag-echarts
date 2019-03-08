import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { BasicComponent } from './basic/basic.component';
import { EchartsInstanceComponent } from './instance/instance.component';
import { EventsComponent } from './events/events.component';
import { UpdateChartComponent } from './update-chart/update-chart.component';
import { LodashComponent } from './lodash/lodash.component'

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    EchartsInstanceComponent,
    EventsComponent,
    UpdateChartComponent,
    LodashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
