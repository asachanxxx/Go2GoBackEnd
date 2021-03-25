import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import VeTypeModel from '../models/vehicletypes.models';


@Injectable()
export class VTypesService {
  private dbPath = '/vehicleTypes';
  tutorialsRef: AngularFireList<VeTypeModel> = null;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef  = db.list(this.dbPath);
  }

  getAll(): AngularFireList<VeTypeModel> {
    return this.tutorialsRef;
  }

  create(tutorial: VeTypeModel): any {
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

// tslint:disable-next-line: eofline
}
