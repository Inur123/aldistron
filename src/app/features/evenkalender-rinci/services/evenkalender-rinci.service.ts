import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvenkalenderRinciDto } from '../models/evenkalender-rinci.dto';

@Injectable({
  providedIn: 'root'
})
export class EvenkalenderRinciService {
  private readonly endpoint = 'evenkalender-rinci';

  constructor(private http: HttpClient) {}

  getEvenkalenderRincis(): Observable<EvenkalenderRinciDto[]> {
    return this.http.get<EvenkalenderRinciDto[]>("${environment.apiUrl}/evenkalender-rinci");
  }
}
