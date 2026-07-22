import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserdataRinciDto } from '../models/userdata-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class UserdataRinciService {
  private readonly endpoint = 'userdata-rinci';

  constructor(private http: HttpClient) {}

  getUserdataRincis(): Observable<UserdataRinciDto[]> {
    return this.http.get<UserdataRinciDto[]>("${environment.apiUrl}/userdata-rinci");
  }
}
