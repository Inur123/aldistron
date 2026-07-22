import { Injectable, signal } from '@angular/core';
import { VendorKategori } from '../models/vendor-kategori.model';

@Injectable({
  providedIn: 'root'
})
export class VendorKategoriStore {
  readonly kategories = signal<VendorKategori[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedKategori = signal<VendorKategori | null>(null);

  setKategories(kategories: VendorKategori[]): void {
    this.kategories.set(kategories);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedKategori(kategori: VendorKategori | null): void {
    this.selectedKategori.set(kategori);
  }
}
