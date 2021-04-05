import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import Driver from '../models/drivers.model';

@Injectable()
export class DriverService {
  private dbPath = '/drivers';
  tutorialsRef: AngularFireList<Driver> = null;
  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef  = db.list(this.dbPath);

  }

  getAll(): AngularFireList<any> {
    return this.tutorialsRef;
  }

  getAllTrips(key): AngularFireList<any> {
    var dbpath2 = "/drivers/" + key + "/tripHistory";
    console.log(dbpath2);
    var tutorialsRefTrips  = this.db.list(dbpath2, ref=> ref.limitToLast(10));
    return tutorialsRefTrips;
  }

  getAllPayments(key): AngularFireList<any> {
    var dbpath2 = "/drivers/" + key + "/paymentHistory";
    console.log(dbpath2);
    var tutorialsRefTrips  = this.db.list(dbpath2, ref=> ref.limitToLast(10));
    return tutorialsRefTrips;
  }


  create(tutorial: Driver): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }

  search(term, values): AngularFireList<any> {
    console.log("values returned " + values);
    let returnval;
     switch (term) {
    case "Driver Id":
     console.log("Search Using DriverID");

     break;
     case "Nic No":
       console.log("Search Using Nic No");
       returnval =  this.db.list(this.dbPath, ref => ref.orderByChild("onlineStatus").equalTo("online"));
     break;
     case "Name":
     console.log("Search Using Name");
     returnval =  this.db.list(this.dbPath, ref => ref.orderByChild("fullName").equalTo(values));

     break;
     case "Email":
      returnval =  this.db.list(this.dbPath, ref => ref.orderByChild("email").equalTo(values));

       break;
       case "Mobile":
        returnval =  this.db.list(this.dbPath, ref => ref.orderByChild("phoneNumber").equalTo(values));

         break;

    }
    return returnval;
  }

  async GetAllDrivers() {
    //  var driverList = null;
    //  var val =  this.db.database.ref("/listTree/driverList").once('value', (snapshot) => {
    //   driverList = snapshot;
    //   snapshot.forEach((childSnapshot) => {
    //     var childKey = childSnapshot.key;
    //     var childData = childSnapshot.val();
    //     console.log(childKey);
    //     console.log(childData);

    //   });
    // });
    return  this.db.database.ref("/listTree/driverList").once;
  }

// tslint:disable-next-line: eofline
}
