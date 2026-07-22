import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DropdownListService } from '../services/dropdown-list.service';
import { DropdownList } from '../models/dropdown-list.model';
import { DropdownListMapper } from './dropdown-list.mapper';

@Injectable({
  providedIn: 'root'
})
export class DropdownListRepository {
  constructor(private service: DropdownListService) {}

  getDropdownLists(): Observable<DropdownList[]> {
    return this.service.getDropdownLists().pipe(
      map(dtos => DropdownListMapper.toModelList(dtos))
    );
  }
}
