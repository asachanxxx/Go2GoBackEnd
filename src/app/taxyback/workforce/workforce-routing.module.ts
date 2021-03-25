import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicletypesComponent } from '../vehicletypes/vehicletypes.component';



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
        path: 'vehiclemodels',
        component: VehicletypesComponent,
        data: {
          title: 'Cards'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkforceRoutingModule { }
