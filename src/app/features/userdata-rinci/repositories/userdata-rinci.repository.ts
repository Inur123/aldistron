import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserdataRinciService } from '../services/userdata-rinci.service';
import { UserdataRinci } from '../models/userdata-rinci.model';
import { UserdataRinciMapper } from './userdata-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class UserdataRinciRepository {
  constructor(private service: UserdataRinciService) {}

  getUserdataRincis(): Observable<UserdataRinci[]> {
    return this.service.getUserdataRincis().pipe(
      map(dtos => UserdataRinciMapper.toModelList(dtos))
    );
  }
}
