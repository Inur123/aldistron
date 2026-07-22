import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProdukBrandService } from '../services/produk-brand.service';
import { ProdukBrand } from '../models/produk-brand.model';
import { ProdukBrandMapper } from './produk-brand.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProdukBrandRepository {
  constructor(private service: ProdukBrandService) {}

  getBrands(): Observable<ProdukBrand[]> {
    return this.service.getBrands().pipe(
      map(dtos => ProdukBrandMapper.toModelList(dtos))
    );
  }
}
