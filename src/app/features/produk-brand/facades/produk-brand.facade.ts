import { Injectable } from '@angular/core';
import { ProdukBrandRepository } from '../repositories/produk-brand.repository';
import { ProdukBrandStore } from './produk-brand.store';
import { ProdukBrand } from '../models/produk-brand.model';

@Injectable({
  providedIn: 'root'
})
export class ProdukBrandFacade {
  constructor(
    private repository: ProdukBrandRepository,
    private store: ProdukBrandStore
  ) {}

  get brands() {
    return this.store.brands;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedBrand() {
    return this.store.selectedBrand;
  }

  loadBrands(): void {
    this.store.setLoading(true);
    this.repository.getBrands().subscribe({
      next: (data) => {
        this.store.setBrands(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectBrand(brand: ProdukBrand | null): void {
    this.store.setSelectedBrand(brand);
  }
}
