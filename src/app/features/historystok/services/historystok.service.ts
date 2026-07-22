import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistorystokDto } from '../models/historystok.dto';

@Injectable({
  providedIn: 'root'
})
export class HistorystokService {
  private readonly endpoint = 'historystok';

  constructor(private http: HttpClient) {}

  getHistorystoks(): Observable<HistorystokDto[]> {
    return this.http.get<HistorystokDto[]>("${environment.apiUrl}/historystok");
  }
}
