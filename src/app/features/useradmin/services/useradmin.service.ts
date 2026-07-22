import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UseradminDto } from '../models/useradmin.dto';

@Injectable({
  providedIn: 'root'
})
export class UseradminService {
  private readonly endpoint = 'useradmin';

  constructor(private http: HttpClient) {}

  getUseradmins(): Observable<UseradminDto[]> {
    return this.http.get<UseradminDto[]>("${environment.apiUrl}/useradmin");
  }
}
