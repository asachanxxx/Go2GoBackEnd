import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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

   dataLoaded = true;

  public mySentences: Logs[] = [];

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

 async getLogs(uuid,dateStr ){
  this.db.database.ref("/logs/"+uuid+"/"+ dateStr).once('value', (snapshot) => {
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
    console.log("uuid = " + this.uuid + "   date" +  this.date );
    this.getLogs(this.uuid,"04042021").then((value) =>{
      this.dataLoaded = true;
      console.log("Data Loaded" + this.mySentences);
    });
  }

  onClickDeleteLog(){

  }


}
