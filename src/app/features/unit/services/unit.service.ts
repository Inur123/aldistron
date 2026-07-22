import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitDto } from '../models/unit.dto';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  private readonly endpoint = 'unit';

  constructor(private http: HttpClient) {}

  getUnits(): Observable<UnitDto[]> {
    return this.http.get<UnitDto[]>("https://api.aldistron.com/unit");
  }
}
