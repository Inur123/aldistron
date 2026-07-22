import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserdataTargetRinciDto } from '../models/userdata-target-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class UserdataTargetRinciService {
  private readonly endpoint = 'userdata-target-rinci';

  constructor(private http: HttpClient) {}

  getUserdataTargetRincis(): Observable<UserdataTargetRinciDto[]> {
    return this.http.get<UserdataTargetRinciDto[]>("${environment.apiUrl}/userdata-target-rinci");
  }
}
