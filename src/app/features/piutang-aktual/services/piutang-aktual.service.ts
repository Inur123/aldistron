import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PiutangAktualDto } from '../models/piutang-aktual.dto';

@Injectable({
  providedIn: 'root'
})
export class PiutangAktualService {
  private readonly endpoint = 'piutang-aktual';

  constructor(private http: HttpClient) {}

  getPiutangAktuals(): Observable<PiutangAktualDto[]> {
    return this.http.get<PiutangAktualDto[]>("https://api.aldistron.com/piutang-aktual");
  }
}
