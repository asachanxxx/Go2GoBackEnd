import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/drivers.service';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';




@Component({
  templateUrl: 'fleetview.component.html'
})
export class FleetViewComponent implements OnInit {

  filterTye = "Driver Id";
  txt_svalue;
  users: any[] = [];
  singleUser;
  submitted = false;
  selectedrecord: any;
  issearchusingKey = true;

  constructor(private driverService: DriverService, private db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  saveTutorial(): void {
    // this.driverService.create(this.users).then(() => {
    //   console.log('Created new item successfully!');
    //   this.submitted = true;
    // });
  }

  retrieveUsers(): void {
    this.driverService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.users = data;
      //this.selectedrecord = data.vehicle_details[0];
      console.log('data passing are   :====' + this.users);
    });
  }

  click_user(user, i) {
    this.selectedrecord = user;
    console.log('clicked on a driver: - KeyL = ' + user.key + ' at index : = ' + i);
    console.log('clicked on a fleetNo= ' + user.vehicle_details.fleetNo + ' at index : = ' + i);
  }

  click_on(user, i) {

  }

  showDriverDetails(driverId: string) {

  }

  onItemChange_driverID(value) {
    console.log(" Value is : ", value);
    this.filterTye = "Driver Id";
  }

  onItemChange_nic(value) {
    console.log(" Value is : ", value);
    this.filterTye = "Nic No";
  }
  onItemChange_name(value) {
    console.log(" Value is : ", value);
    this.filterTye = "Name";
  }
  onItemChange_email(value) {
    console.log(" Value is : ", value);
    this.filterTye = "Email";
  }
  onItemChange_mobile(value) {
    console.log(" Value is : ", value);
    this.filterTye = "Mobile";
  }

  onclick_driversearch() {
    console.log(" Value is : ", event);
    this.users = null;
    if (this.filterTye === "Driver Id") {
      this.issearchusingKey = true;
      this.db.database.ref("/drivers/yp5AOyuFMSYiV5VuGiF3HnjlIcz1").once('value')
        .then(function (dataSnapshot) {
          console.log('data passing are >>>>>', dataSnapshot.val());
          this.singleUser = dataSnapshot.val();
        });
    } else {
      this.issearchusingKey = false;
      this.driverService.search(this.filterTye, this.txt_svalue).
        snapshotChanges().pipe(
          map(changes =>
            changes.map(c =>
              ({ key: c.payload.key, ...c.payload.val() })
            )
          )
        ).subscribe(data => {
          this.users = data;
          data.forEach(element => {
            console.log('data passing are   :====', element);
          });
        });
    }
  }

  click_SetStatus(selectedrecord,funtye){
    var statusz = "Pending";
    if(funtye ===1){
      statusz = "NoVehicleDet";
    }else if(funtye ===2){
      statusz = "NoImageDet";
    }else if(funtye ===3){
      statusz = "Active";
    }else if(funtye ===4){
      statusz = "Pending";
    }else if(funtye ===5){
      statusz = "Banned";
    }
    var refx =  this.db.database.ref("/drivers/" + selectedrecord.key + "/accountStatus");
    refx.set(statusz).then(val =>{
      console.log("Record Udated" , val);
    });

  }






}

