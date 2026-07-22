import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlaimBiayaDto } from '../models/klaim-biaya.dto';

@Injectable({
  providedIn: 'root'
})
export class KlaimBiayaService {
  private readonly endpoint = 'klaim-biaya';

  constructor(private http: HttpClient) {}

  getKlaimBiayas(): Observable<KlaimBiayaDto[]> {
    return this.http.get<KlaimBiayaDto[]>("https://api.aldistron.com/klaim-biaya");
  }
}
