import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoGlobalDto } from '../models/info-global.dto';

@Injectable({
  providedIn: 'root'
})
export class InfoGlobalService {
  private readonly endpoint = 'info-global';

  constructor(private http: HttpClient) {}

  getInfoGlobals(): Observable<InfoGlobalDto[]> {
    return this.http.get<InfoGlobalDto[]>("${environment.apiUrl}/info-global");
  }
}
