import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserdataService } from '../services/userdata.service';
import { Userdata } from '../models/userdata.model';
import { UserdataMapper } from './userdata.mapper';

@Injectable({
  providedIn: 'root'
})
export class UserdataRepository {
  constructor(private service: UserdataService) {}

  getUserdatas(): Observable<Userdata[]> {
    return this.service.getUserdatas().pipe(
      map(dtos => UserdataMapper.toModelList(dtos))
    );
  }
}
