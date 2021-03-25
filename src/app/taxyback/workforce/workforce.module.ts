import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkforceRoutingModule } from './workforce-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { VTypesService } from '../../services/vehicletypes.service';
import { VehicletypesComponent } from '../vehicletypes/vehicletypes.component';
import { ReactiveFormsModule } from '@angular/forms';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  imports: [
    CommonModule,
    WorkforceRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBSixR5_gpaPVfXXIXV-bdDKW624mBrRqQ'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    VehicletypesComponent
   ],
  providers:[
    VTypesService
  ]
})
export class WorkforceModule { }
