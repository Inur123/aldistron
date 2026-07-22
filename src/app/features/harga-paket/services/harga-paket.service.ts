import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaPaketDto } from '../models/harga-paket.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaPaketService {
  private readonly endpoint = 'harga-paket';

  constructor(private http: HttpClient) {}

  getHargaPakets(): Observable<HargaPaketDto[]> {
    return this.http.get<HargaPaketDto[]>("${environment.apiUrl}/harga-paket");
  }
}
