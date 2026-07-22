import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PiutangMomenDto } from '../models/piutang-momen.dto';

@Injectable({
  providedIn: 'root'
})
export class PiutangMomenService {
  private readonly endpoint = 'piutang-momen';

  constructor(private http: HttpClient) {}

  getPiutangMomens(): Observable<PiutangMomenDto[]> {
    return this.http.get<PiutangMomenDto[]>("${environment.apiUrl}/piutang-momen");
  }
}
