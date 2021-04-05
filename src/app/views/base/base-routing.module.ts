import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogViwerComponent } from './log-viwer/log-viwer.component';
import { ManageDriversComponent } from './manage-drivers/manage-drivers.component';

//import { CardsComponent } from './cards.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'managedrivers',
        component: ManageDriversComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'logview',
        component: LogViwerComponent,
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
export class BaseRoutingModule {}
