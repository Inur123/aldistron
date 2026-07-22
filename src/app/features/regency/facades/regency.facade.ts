import { Injectable } from '@angular/core';
import { RegencyRepository } from '../repositories/regency.repository';
import { RegencyStore } from './regency.store';
import { Regency } from '../models/regency.model';

@Injectable({
  providedIn: 'root'
})
export class RegencyFacade {
  constructor(
    private repository: RegencyRepository,
    private store: RegencyStore
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
    this.repository.getRegencys().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Regency | null): void {
    this.store.setSelectedItem(item);
  }
}
