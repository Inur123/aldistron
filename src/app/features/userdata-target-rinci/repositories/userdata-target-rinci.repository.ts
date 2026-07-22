import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserdataTargetRinciService } from '../services/userdata-target-rinci.service';
import { UserdataTargetRinci } from '../models/userdata-target-rinci.model';
import { UserdataTargetRinciMapper } from './userdata-target-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class UserdataTargetRinciRepository {
  constructor(private service: UserdataTargetRinciService) {}

  getUserdataTargetRincis(): Observable<UserdataTargetRinci[]> {
    return this.service.getUserdataTargetRincis().pipe(
      map(dtos => UserdataTargetRinciMapper.toModelList(dtos))
    );
  }
}
