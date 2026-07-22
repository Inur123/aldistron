import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KabarpasarchatDto } from '../models/kabarpasarchat.dto';

@Injectable({
  providedIn: 'root'
})
export class KabarpasarchatService {
  private readonly endpoint = 'kabarpasarchat';

  constructor(private http: HttpClient) {}

  getKabarpasarchats(): Observable<KabarpasarchatDto[]> {
    return this.http.get<KabarpasarchatDto[]>("${environment.apiUrl}/kabarpasarchat");
  }
}
