import { Injectable } from '@angular/core';
import { AbsenMasukRepository } from '../repositories/absen-masuk.repository';
import { AbsenMasukStore } from './absen-masuk.store';
import { AbsenMasuk } from '../models/absen-masuk.model';

@Injectable({
  providedIn: 'root'
})
export class AbsenMasukFacade {
  constructor(
    private repository: AbsenMasukRepository,
    private store: AbsenMasukStore
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
    this.repository.getAbsenMasuks().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: AbsenMasuk | null): void {
    this.store.setSelectedItem(item);
  }
}
