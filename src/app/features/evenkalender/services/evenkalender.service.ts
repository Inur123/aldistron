import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvenkalenderDto } from '../models/evenkalender.dto';

@Injectable({
  providedIn: 'root'
})
export class EvenkalenderService {
  private readonly endpoint = 'evenkalender';

  constructor(private http: HttpClient) {}

  getEvenkalenders(): Observable<EvenkalenderDto[]> {
    return this.http.get<EvenkalenderDto[]>("https://api.aldistron.com/evenkalender");
  }
}
