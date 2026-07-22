import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DropdownListDto } from '../models/dropdown-list.dto';

@Injectable({
  providedIn: 'root'
})
export class DropdownListService {
  private readonly endpoint = 'dropdown-list';

  constructor(private http: HttpClient) {}

  getDropdownLists(): Observable<DropdownListDto[]> {
    return this.http.get<DropdownListDto[]>("${environment.apiUrl}/dropdown-list");
  }
}
