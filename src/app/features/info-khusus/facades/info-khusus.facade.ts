import { Injectable } from '@angular/core';
import { InfoKhususRepository } from '../repositories/info-khusus.repository';
import { InfoKhususStore } from './info-khusus.store';
import { InfoKhusus } from '../models/info-khusus.model';

@Injectable({
  providedIn: 'root'
})
export class InfoKhususFacade {
  constructor(
    private repository: InfoKhususRepository,
    private store: InfoKhususStore
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
    this.repository.getInfoKhususs().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: InfoKhusus | null): void {
    this.store.setSelectedItem(item);
  }
}
