import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserdataDto } from '../models/userdata.dto';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private readonly endpoint = 'userdata';

  constructor(private http: HttpClient) {}

  getUserdatas(): Observable<UserdataDto[]> {
    return this.http.get<UserdataDto[]>("${environment.apiUrl}/userdata");
  }
}
