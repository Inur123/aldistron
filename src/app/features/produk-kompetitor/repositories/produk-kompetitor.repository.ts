import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProdukKompetitorService } from '../services/produk-kompetitor.service';
import { ProdukKompetitor } from '../models/produk-kompetitor.model';
import { ProdukKompetitorMapper } from './produk-kompetitor.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProdukKompetitorRepository {
  constructor(private service: ProdukKompetitorService) {}

  getKompetitors(): Observable<ProdukKompetitor[]> {
    return this.service.getKompetitors().pipe(
      map(dtos => ProdukKompetitorMapper.toModelList(dtos))
    );
  }
}
