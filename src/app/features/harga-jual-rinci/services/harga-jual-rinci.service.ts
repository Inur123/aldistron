import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaJualRinciDto } from '../models/harga-jual-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaJualRinciService {
  private readonly endpoint = 'harga-jual-rinci';

  constructor(private http: HttpClient) {}

  getHargaJualRincis(): Observable<HargaJualRinciDto[]> {
    return this.http.get<HargaJualRinciDto[]>("${environment.apiUrl}/harga-jual-rinci");
  }
}
