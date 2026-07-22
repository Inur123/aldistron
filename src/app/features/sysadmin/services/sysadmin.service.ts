import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SysadminDto } from '../models/sysadmin.dto';

@Injectable({
  providedIn: 'root'
})
export class SysadminService {
  private readonly endpoint = 'sysadmin';

  constructor(private http: HttpClient) {}

  getSysadmins(): Observable<SysadminDto[]> {
    return this.http.get<SysadminDto[]>("https://api.aldistron.com/sysadmin");
  }
}
