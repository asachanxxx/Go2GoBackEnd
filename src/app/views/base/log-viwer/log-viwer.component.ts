import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import Driver from '../../../models/drivers.model';
import { DriverService } from '../../../services/drivers.service';

class Logs {
  logLine: string;
}


@Component({
  selector: 'app-log-viwer',
  templateUrl: './log-viwer.component.html',
  styleUrls: ['./log-viwer.component.css']
})
export class LogViwerComponent implements OnInit {

  uuid = "";
  date = "";
  logOwner = "No";
  dataLoaded = true;
  selectedDate:Date;

  public mySentences: Logs[] = [];
  private defaultMinDate: Date = new Date(-8.64e15);
  private defaultMaxDate: Date = new Date(8.64e15);

  dateConfig = {
    min: this.defaultMinDate,
    max: this.defaultMaxDate,
    value: new Date()


 }

  constructor(private service: DriverService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.db.database.ref("/logs/YUSovcrD4aSQo7h0n68QwmtsiHV2/04042021").once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var childData = childSnapshot.val();
        console.log(childData);
        this.mySentences.push(
          {
            logLine: childData,
          });
      });
    });
  }

  rdo_customerChange(events){
    console.log("Customer selected");
    this.logOwner = "Customer";
  }

  rdo_driverChange(event){
    console.log("Driver selected");
    this.logOwner = "Driver";
  }

  rdo_driverJournal(event){
    console.log("Journal selected");
    this.logOwner = "Journal";
  }

  rdo_gpsChange(event){
    console.log("Journal selected");
    this.logOwner = "gps";
  }


  onClickDeleteLog(){
      console.log("onClickDeleteLog");
  }

 async getLogs(basePath, uuid,dateStr ){
  console.log("Snapshot ok" + dateStr);
  this.db.database.ref(basePath+uuid+"/"+ dateStr).once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      var childData = childSnapshot.val();
      console.log(childData);
      this.mySentences.push(
        {
          logLine: childData,
        });
    });
  });

 }

  onClickShowLog(){
    this.mySentences = [];

    if(this.uuid == ""){
      alert("Need universal ID");
      return;
    }
    if(this.selectedDate == undefined){
      alert("Please select a date");
      return;
    }
    if(this.logOwner == "No"){
      alert("Please select customer or driver");
      return;
    }


    var DateX =  new Date(this.selectedDate);
    var month = DateX.getUTCMonth() + 1; //months from 1-12
    var day = DateX.getUTCDate();
    var year = DateX.getUTCFullYear();
    var dateString = day.toString().padStart(2,'0') + month.toString().padStart(2,'0')+ year.toString().padStart(4,'0')
    console.log("Date Break = " + dateString);

    var basePath = "";

    if(this.logOwner == "Customer"){
      basePath = "/logs_cus/";
    }else if(this.logOwner == "Driver"){
      basePath = "/logs/";
    }else if(this.logOwner == "gps"){
      basePath = "/logGps/";
    }
    else{
      basePath = "/logJournal/";
    }

    this.getLogs(basePath,this.uuid,dateString).then((value) =>{
      this.dataLoaded = true;
      console.log("Data Loaded" + this.mySentences);
    });

  }






}
