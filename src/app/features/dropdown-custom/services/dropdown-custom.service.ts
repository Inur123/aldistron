import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DropdownCustomDto } from '../models/dropdown-custom.dto';

@Injectable({
  providedIn: 'root'
})
export class DropdownCustomService {
  private readonly endpoint = 'dropdown-custom';

  constructor(private http: HttpClient) {}

  getDropdownCustoms(): Observable<DropdownCustomDto[]> {
    return this.http.get<DropdownCustomDto[]>("https://api.aldistron.com/dropdown-custom");
  }
}
