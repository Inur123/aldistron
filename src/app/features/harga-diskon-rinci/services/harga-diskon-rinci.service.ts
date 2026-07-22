import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HargaDiskonRinciDto } from '../models/harga-diskon-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonRinciService {
  private readonly endpoint = 'harga-diskon-rinci';

  constructor(private http: HttpClient) {}

  getHargaDiskonRincis(): Observable<HargaDiskonRinciDto[]> {
    return this.http.get<HargaDiskonRinciDto[]>("${environment.apiUrl}/harga-diskon-rinci");
  }
}
