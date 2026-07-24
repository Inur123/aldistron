import { Injectable, signal } from '@angular/core';
import { ProdukBrand } from '../models/produk-brand.model';

@Injectable({
  providedIn: 'root'
})
export class ProdukBrandStore {
  readonly brands = signal<ProdukBrand[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedBrand = signal<ProdukBrand | null>(null);

  addBrand(brand: ProdukBrand): void {
    this.brands.update(items => [brand, ...items]);
  }

  updateBrand(updated: ProdukBrand): void {
    this.brands.update(items => items.map(b => b.id === updated.id ? { ...b, ...updated } : b));
  }

  deleteBrand(id: number): void {
    this.brands.update(items => items.filter(b => b.id !== id));
  }

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
