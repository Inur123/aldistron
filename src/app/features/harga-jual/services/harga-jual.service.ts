import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaJualDto } from '../models/harga-jual.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaJualService {
  private readonly endpoint = 'harga-jual';

  constructor(private http: HttpClient) {}

  getHargaJuals(): Observable<HargaJualDto[]> {
    return this.http.get<HargaJualDto[]>("${environment.apiUrl}/harga-jual");
  }
}
