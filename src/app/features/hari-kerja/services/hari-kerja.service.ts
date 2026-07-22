import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HariKerjaDto } from '../models/hari-kerja.dto';

@Injectable({
  providedIn: 'root'
})
export class HariKerjaService {
  private readonly endpoint = 'hari-kerja';

  constructor(private http: HttpClient) {}

  getHariKerjas(): Observable<HariKerjaDto[]> {
    return this.http.get<HariKerjaDto[]>("${environment.apiUrl}/hari-kerja");
  }
}
