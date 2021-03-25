// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { BaseRoutingModule } from './quicklink-routing.module';
import { FleetViewComponent } from './fleetview.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DriverService } from '../../services/drivers.service';
import { MaindispatcherComponent } from './maindispatcher/maindispatcher.component';

export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBSixR5_gpaPVfXXIXV-bdDKW624mBrRqQ'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  declarations: [
   FleetViewComponent,
   MaindispatcherComponent
  ],
  providers:[
    DriverService
  ]
})
export class QuickLinkModule { }
