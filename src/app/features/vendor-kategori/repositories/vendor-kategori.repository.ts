import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VendorKategoriService } from '../services/vendor-kategori.service';
import { VendorKategori } from '../models/vendor-kategori.model';
import { VendorKategoriMapper } from './vendor-kategori.mapper';

@Injectable({
  providedIn: 'root'
})
export class VendorKategoriRepository {
  constructor(private service: VendorKategoriService) {}

  getCategories(): Observable<VendorKategori[]> {
    return this.service.getCategories().pipe(
      map(dtos => VendorKategoriMapper.toModelList(dtos))
    );
  }
}
