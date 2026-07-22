import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AolTaxDto } from '../models/aol-tax.dto';

@Injectable({
  providedIn: 'root'
})
export class AolTaxService {
  private readonly endpoint = 'aol-tax';

  constructor(private http: HttpClient) {}

  getAolTaxes(): Observable<AolTaxDto[]> {
    return this.http.get<AolTaxDto[]>(`https://api.aldistron.com/${this.endpoint}`);
  }
}
