import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import Driver from '../models/drivers.model';

@Injectable()
export class DriverService {
  private dbPath = '/drivers';
  tutorialsRef: AngularFireList<Driver> = null;
  dbref;
  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef  = db.list(this.dbPath);
    this.dbref = db;
  }

  getAll(): AngularFireList<any> {
    return this.tutorialsRef;
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


// tslint:disable-next-line: eofline
}
