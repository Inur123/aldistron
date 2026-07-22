import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SysadminService } from '../services/sysadmin.service';
import { Sysadmin } from '../models/sysadmin.model';
import { SysadminMapper } from './sysadmin.mapper';

@Injectable({
  providedIn: 'root'
})
export class SysadminRepository {
  constructor(private service: SysadminService) {}

  getSysadmins(): Observable<Sysadmin[]> {
    return this.service.getSysadmins().pipe(
      map(dtos => SysadminMapper.toModelList(dtos))
    );
  }
}
