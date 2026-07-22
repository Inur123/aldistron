import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoKhususDto } from '../models/info-khusus.dto';

@Injectable({
  providedIn: 'root'
})
export class InfoKhususService {
  private readonly endpoint = 'info-khusus';

  constructor(private http: HttpClient) {}

  getInfoKhususs(): Observable<InfoKhususDto[]> {
    return this.http.get<InfoKhususDto[]>("${environment.apiUrl}/info-khusus");
  }
}
