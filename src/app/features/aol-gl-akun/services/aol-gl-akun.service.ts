import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AolGlAkunDto } from '../models/aol-gl-akun.dto';

@Injectable({
  providedIn: 'root'
})
export class AolGlAkunService {
  private readonly endpoint = 'aol-gl-akun';

  constructor(private http: HttpClient) {}

  getAolGlAkuns(): Observable<AolGlAkunDto[]> {
    return this.http.get<AolGlAkunDto[]>(`${environment.apiUrl}/${this.endpoint}`);
  }
}
