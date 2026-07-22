import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KeycodeService } from '../services/keycode.service';
import { Keycode } from '../models/keycode.model';
import { KeycodeMapper } from './keycode.mapper';

@Injectable({
  providedIn: 'root'
})
export class KeycodeRepository {
  constructor(private service: KeycodeService) {}

  getKeycodes(): Observable<Keycode[]> {
    return this.service.getKeycodes().pipe(
      map(dtos => KeycodeMapper.toModelList(dtos))
    );
  }
}
