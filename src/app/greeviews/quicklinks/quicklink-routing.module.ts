import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FleetViewComponent } from './fleetview.component';
import { MaindispatcherComponent } from './maindispatcher/maindispatcher.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'QuickLinks'
    },
    children: [
      {
        path: '',
        redirectTo: 'fleetview'
      },
      {
        path: 'fleetview',
        component: FleetViewComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'maindispatcher',
        component: MaindispatcherComponent,
        data: {
          title: 'Main Dispatcher '
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
