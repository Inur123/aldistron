import { Injectable } from '@angular/core';
import { DistrictRepository } from '../repositories/district.repository';
import { DistrictStore } from './district.store';
import { District } from '../models/district.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictFacade {
  constructor(
    private repository: DistrictRepository,
    private store: DistrictStore
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
    this.repository.getDistricts().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: District | null): void {
    this.store.setSelectedItem(item);
  }
}
