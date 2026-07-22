import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserdataTargetService } from '../services/userdata-target.service';
import { UserdataTarget } from '../models/userdata-target.model';
import { UserdataTargetMapper } from './userdata-target.mapper';

@Injectable({
  providedIn: 'root'
})
export class UserdataTargetRepository {
  constructor(private service: UserdataTargetService) {}

  getUserdataTargets(): Observable<UserdataTarget[]> {
    return this.service.getUserdataTargets().pipe(
      map(dtos => UserdataTargetMapper.toModelList(dtos))
    );
  }
}
