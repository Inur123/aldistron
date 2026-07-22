import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GudangDto } from '../models/gudang.dto';

@Injectable({
  providedIn: 'root'
})
export class GudangService {
  private readonly endpoint = 'gudang';

  constructor(private http: HttpClient) {}

  getGudangs(): Observable<GudangDto[]> {
    return this.http.get<GudangDto[]>("${environment.apiUrl}/gudang");
  }
}
