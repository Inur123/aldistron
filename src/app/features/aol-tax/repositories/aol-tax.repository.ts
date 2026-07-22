import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AolTaxService } from '../services/aol-tax.service';
import { AolTax } from '../models/aol-tax.model';
import { AolTaxMapper } from './aol-tax.mapper';

@Injectable({
  providedIn: 'root'
})
export class AolTaxRepository {
  constructor(private service: AolTaxService) {}

  getAolTaxes(): Observable<AolTax[]> {
    return this.service.getAolTaxes().pipe(
      map(dtos => AolTaxMapper.toModelList(dtos))
    );
  }
}
