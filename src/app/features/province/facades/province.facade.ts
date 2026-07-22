import { Injectable } from '@angular/core';
import { ProvinceRepository } from '../repositories/province.repository';
import { ProvinceStore } from './province.store';
import { Province } from '../models/province.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinceFacade {
  constructor(
    private repository: ProvinceRepository,
    private store: ProvinceStore
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
    this.repository.getProvinces().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Province | null): void {
    this.store.setSelectedItem(item);
  }
}
