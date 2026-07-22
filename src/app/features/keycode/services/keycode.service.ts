import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycodeDto } from '../models/keycode.dto';

@Injectable({
  providedIn: 'root'
})
export class KeycodeService {
  private readonly endpoint = 'keycode';

  constructor(private http: HttpClient) {}

  getKeycodes(): Observable<KeycodeDto[]> {
    return this.http.get<KeycodeDto[]>("${environment.apiUrl}/keycode");
  }
}
