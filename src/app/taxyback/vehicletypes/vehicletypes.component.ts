import { Component, OnInit } from '@angular/core';
import { VTypesService } from '../../services/vehicletypes.service';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import VeTypeModel from '../../models/vehicletypes.models';

@Component({
  selector: 'app-vehicletypes',
  templateUrl: './vehicletypes.component.html',
  styleUrls: ['./vehicletypes.component.css']
})
export class VehicletypesComponent implements OnInit {

  vtypes:any;
  submitted = false;
  selectedrecord:any;
  isformValid = false;

  myForm = new FormGroup({
    vtype: new FormControl('',[Validators.required]),
    baseFire: new FormControl(''),
    perKm: new FormControl(''),
    timeFire: new FormControl(''),
    displayName: new FormControl('',[Validators.required]),
  });

  constructor(private vtyprservice:VTypesService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.vtyprservice.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.vtypes = data;
      console.log('data passing are   :====' + this.vtypes);
    });
  }



  click_user(user, i){
    this.selectedrecord = user;
    console.log('clicked on a driver: - KeyL = ' + user.key + ' at index : = ' + i);
  }

  click_on(user, i){

  }

  update(){
    console.warn("this.myForm.value" + this.myForm.value);
    console.warn("this.myForm.status" + this.myForm.status);
    console.warn('this.myForm.controls["vtype"].status' + this.myForm.controls["vtype"].status);
    console.warn('this.myForm.controls["baseFire"].status' + this.myForm.controls["baseFire"].status);
    console.warn('this.myForm.controls["perKm"].status' + this.myForm.controls["perKm"].status);
    console.warn('this.myForm.controls["timeFire"].status' + this.myForm.controls["timeFire"].status);

    if(this.myForm.status == "VALID"){
      this.isformValid = false;

      let vmodal = new VeTypeModel();
      vmodal.name = this.myForm.controls["vtype"].value;
      vmodal.baseFire = this.myForm.controls["baseFire"].value;
      vmodal.perKm = this.myForm.controls["perKm"].value;
      vmodal.minutePrice = this.myForm.controls["timeFire"].value;
      vmodal.displayName = this.myForm.controls["displayName"].value;
      this.vtyprservice.create(vmodal);



    }else{
      this.isformValid = true;
    }


  }


}
