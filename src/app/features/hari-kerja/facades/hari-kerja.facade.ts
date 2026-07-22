import { Injectable } from '@angular/core';
import { HariKerjaRepository } from '../repositories/hari-kerja.repository';
import { HariKerjaStore } from './hari-kerja.store';
import { HariKerja } from '../models/hari-kerja.model';

@Injectable({
  providedIn: 'root'
})
export class HariKerjaFacade {
  constructor(
    private repository: HariKerjaRepository,
    private store: HariKerjaStore
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
    this.repository.getHariKerjas().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: HariKerja | null): void {
    this.store.setSelectedItem(item);
  }
}
