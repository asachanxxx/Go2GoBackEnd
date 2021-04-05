import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import Driver from '../../../models/drivers.model';
import { DriverService } from '../../../services/drivers.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-drivers',
  templateUrl: './manage-drivers.component.html',
  styleUrls: ['./manage-drivers.component.css']
})
export class ManageDriversComponent implements OnInit {
  public mySentences: Driver[] = [

  ];
  tripData: any;
  paymentData: any;
  myArray: any[] = []

  constructor(private service: DriverService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.db.database.ref("/listTree/driverList").once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        //var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        //console.log(this.childData);
        this.mySentences.push(
          {
            key: childData.key,
            email: childData.email,
            accountStatus: childData.accountStatus,
            fullName: childData.fullName,
            nic: childData.nic,
            phoneNumber: childData.phoneNumber,
          });
      });
    });
  }

  getLogs(){

  }


  activateDriver_click(key) {
    var dbpath = "/listTree/driverList/" + key + "/accountStatus";
    var dbpath2 = "/drivers/" + key + "/profile/accountStatus";
    console.log(dbpath);
    this.db.database.ref(dbpath).set("Active");
    this.db.database.ref(dbpath2).set("Active");
  }

  bannedDriver_click(key) {
    var dbpath = "/listTree/driverList/" + key + "/accountStatus";
    var dbpath2 = "/drivers/" + key + "/profile/accountStatus";
    console.log(dbpath);
    this.db.database.ref(dbpath).set("Banned");
    this.db.database.ref(dbpath2).set("Banned");
  }

  viewTrips_click(key){
    console.log("came");
    this.service.getAllTrips(key).
    snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      console.log("subscribe" + data);
      console.log(data);
      this.tripData = data;
      data.forEach(element => {
        console.log('data passing are   :====', element);
      });
    });
  }

  viewPayments_click(key){
    console.log("came");
    this.service.getAllPayments(key).
    snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      console.log("subscribe" + data);
      console.log(data);
      this.paymentData = data;
      data.forEach(element => {
        console.log('data passing are   :====', element);
      });
    });
  }


}
