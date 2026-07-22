import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistorystokRinciDto } from '../models/historystok-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class HistorystokRinciService {
  private readonly endpoint = 'historystok-rinci';

  constructor(private http: HttpClient) {}

  getHistorystokRincis(): Observable<HistorystokRinciDto[]> {
    return this.http.get<HistorystokRinciDto[]>("${environment.apiUrl}/historystok-rinci");
  }
}
