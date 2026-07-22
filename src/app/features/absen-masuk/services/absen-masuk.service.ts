import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbsenMasukDto } from '../models/absen-masuk.dto';

@Injectable({
  providedIn: 'root'
})
export class AbsenMasukService {
  private readonly endpoint = 'absen-masuk';

  constructor(private http: HttpClient) {}

  getAbsenMasuks(): Observable<AbsenMasukDto[]> {
    return this.http.get<AbsenMasukDto[]>("${environment.apiUrl}/absen-masuk");
  }
}
