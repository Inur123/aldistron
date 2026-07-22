import { Injectable } from '@angular/core';
import { VendorKategoriRepository } from '../repositories/vendor-kategori.repository';
import { VendorKategoriStore } from './vendor-kategori.store';
import { VendorKategori } from '../models/vendor-kategori.model';

@Injectable({
  providedIn: 'root'
})
export class VendorKategoriFacade {
  constructor(
    private repository: VendorKategoriRepository,
    private store: VendorKategoriStore
  ) {}

  get kategories() {
    return this.store.kategories;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedKategori() {
    return this.store.selectedKategori;
  }

  loadKategories(): void {
    this.store.setLoading(true);
    this.repository.getCategories().subscribe({
      next: (data) => {
        this.store.setKategories(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectKategori(kategori: VendorKategori | null): void {
    this.store.setSelectedKategori(kategori);
  }
}
