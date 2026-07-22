import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArmadaRinciDto } from '../models/armada-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class ArmadaRinciService {
  private readonly endpoint = 'armada-rinci';

  constructor(private http: HttpClient) {}

  getArmadaRincis(): Observable<ArmadaRinciDto[]> {
    return this.http.get<ArmadaRinciDto[]>("https://api.aldistron.com/armada-rinci");
  }
}
