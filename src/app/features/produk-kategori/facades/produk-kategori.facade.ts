import { Injectable } from '@angular/core';
import { ProdukKategoriRepository } from '../repositories/produk-kategori.repository';
import { ProdukKategoriStore } from './produk-kategori.store';
import { ProdukKategori } from '../models/produk-kategori.model';

@Injectable({
  providedIn: 'root'
})
export class ProdukKategoriFacade {
  constructor(
    private repository: ProdukKategoriRepository,
    private store: ProdukKategoriStore
  ) {}

  get categories() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedCategory() {
    return this.store.selectedItem;
  }

  loadCategories(): void {
    this.store.setLoading(true);
    this.repository.getCategories().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectCategory(category: ProdukKategori | null): void {
    this.store.setSelectedItem(category);
  }

  addCategory(category: ProdukKategori): void {
    this.store.addCategory(category);
  }

  updateCategory(updated: ProdukKategori): void {
    this.store.updateCategory(updated);
  }

  deleteCategory(id: number): void {
    this.store.deleteCategory(id);
  }
}
