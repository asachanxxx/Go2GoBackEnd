// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//import { CardsComponent } from './cards.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { ManageDriversComponent } from './manage-drivers/manage-drivers.component';
import { DriverService } from '../../services/drivers.service';
import { LogViwerComponent } from './log-viwer/log-viwer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,

  ],
  declarations: [
    ManageDriversComponent,
    LogViwerComponent
  ],
  providers:[
    DriverService
  ]

})
export class BaseModule { }
