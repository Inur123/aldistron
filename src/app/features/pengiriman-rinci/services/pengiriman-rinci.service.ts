import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PengirimanRinciDto } from '../models/pengiriman-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class PengirimanRinciService {
  private readonly endpoint = 'pengiriman-rinci';

  constructor(private http: HttpClient) {}

  getPengirimanRincis(): Observable<PengirimanRinciDto[]> {
    return this.http.get<PengirimanRinciDto[]>("${environment.apiUrl}/pengiriman-rinci");
  }
}
