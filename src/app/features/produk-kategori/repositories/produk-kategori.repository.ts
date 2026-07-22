import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProdukKategoriService } from '../services/produk-kategori.service';
import { ProdukKategori } from '../models/produk-kategori.model';
import { ProdukKategoriMapper } from './produk-kategori.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProdukKategoriRepository {
  constructor(private service: ProdukKategoriService) {}

  getCategories(): Observable<ProdukKategori[]> {
    return this.service.getCategories().pipe(
      map(dtos => ProdukKategoriMapper.toModelList(dtos))
    );
  }
}
