import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VillageDto } from '../models/village.dto';

@Injectable({
  providedIn: 'root'
})
export class VillageService {
  private readonly endpoint = 'village';

  constructor(private http: HttpClient) {}

  getVillages(): Observable<VillageDto[]> {
    return this.http.get<VillageDto[]>("https://api.aldistron.com/village");
  }
}
