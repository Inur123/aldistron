import { Injectable } from '@angular/core';
import { HargaMomenRepository } from '../repositories/harga-momen.repository';
import { HargaMomenStore } from './harga-momen.store';
import { HargaMomen } from '../models/harga-momen.model';

@Injectable({
  providedIn: 'root'
})
export class HargaMomenFacade {
  constructor(
    private repository: HargaMomenRepository,
    private store: HargaMomenStore
  ) {}

  get items() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedItem() {
    return this.store.selectedItem;
  }

  loadItems(): void {
    this.store.setLoading(true);
    this.repository.getHargaMomens().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HargaMomen | null): void {
    this.store.setSelectedItem(item);
  }
}
