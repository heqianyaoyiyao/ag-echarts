import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { EchartsInstanceComponent } from './instance/instance.component';
import { EventsComponent } from './events/events.component';
import { UpdateChartComponent } from './update-chart/update-chart.component';
import { LodashComponent } from './lodash/lodash.component';
 

 
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'instance', component: EchartsInstanceComponent },
  { path: 'events', component: EventsComponent },
  { path: 'update-chart', component: UpdateChartComponent },
  { path: 'lodash', component:  LodashComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}