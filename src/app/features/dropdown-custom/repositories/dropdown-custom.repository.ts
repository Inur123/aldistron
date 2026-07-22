import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DropdownCustomService } from '../services/dropdown-custom.service';
import { DropdownCustom } from '../models/dropdown-custom.model';
import { DropdownCustomMapper } from './dropdown-custom.mapper';

@Injectable({
  providedIn: 'root'
})
export class DropdownCustomRepository {
  constructor(private service: DropdownCustomService) {}

  getDropdownCustoms(): Observable<DropdownCustom[]> {
    return this.service.getDropdownCustoms().pipe(
      map(dtos => DropdownCustomMapper.toModelList(dtos))
    );
  }
}
