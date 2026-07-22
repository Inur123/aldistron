import { Injectable, signal } from '@angular/core';
import { ProdukBrand } from '../models/produk-brand.model';

@Injectable({
  providedIn: 'root'
})
export class ProdukBrandStore {
  readonly brands = signal<ProdukBrand[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedBrand = signal<ProdukBrand | null>(null);

  setBrands(brands: ProdukBrand[]): void {
    this.brands.set(brands);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedBrand(brand: ProdukBrand | null): void {
    this.selectedBrand.set(brand);
  }
}
