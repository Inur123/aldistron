import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserdataTargetDto } from '../models/userdata-target.dto';

@Injectable({
  providedIn: 'root'
})
export class UserdataTargetService {
  private readonly endpoint = 'userdata-target';

  constructor(private http: HttpClient) {}

  getUserdataTargets(): Observable<UserdataTargetDto[]> {
    return this.http.get<UserdataTargetDto[]>("https://api.aldistron.com/userdata-target");
  }
}
