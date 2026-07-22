import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PiutangPlafonDto } from '../models/piutang-plafon.dto';

@Injectable({
  providedIn: 'root'
})
export class PiutangPlafonService {
  private readonly endpoint = 'piutang-plafon';

  constructor(private http: HttpClient) {}

  getPiutangPlafons(): Observable<PiutangPlafonDto[]> {
    return this.http.get<PiutangPlafonDto[]>("${environment.apiUrl}/piutang-plafon");
  }
}
