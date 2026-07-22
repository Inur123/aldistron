import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlaimBiayaRinciDto } from '../models/klaim-biaya-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class KlaimBiayaRinciService {
  private readonly endpoint = 'klaim-biaya-rinci';

  constructor(private http: HttpClient) {}

  getKlaimBiayaRincis(): Observable<KlaimBiayaRinciDto[]> {
    return this.http.get<KlaimBiayaRinciDto[]>("${environment.apiUrl}/klaim-biaya-rinci");
  }
}
