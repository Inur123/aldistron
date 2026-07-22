import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankDto } from '../models/bank.dto';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private readonly endpoint = 'bank';

  constructor(private http: HttpClient) {}

  getBanks(): Observable<BankDto[]> {
    return this.http.get<BankDto[]>("${environment.apiUrl}/bank");
  }
}
