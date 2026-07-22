import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArmadaDto } from '../models/armada.dto';

@Injectable({
  providedIn: 'root'
})
export class ArmadaService {
  private readonly endpoint = 'armada';

  constructor(private http: HttpClient) {}

  getArmadas(): Observable<ArmadaDto[]> {
    return this.http.get<ArmadaDto[]>("${environment.apiUrl}/armada");
  }
}
