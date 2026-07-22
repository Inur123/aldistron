import { Injectable } from '@angular/core';
import { PlafonBiayaRepository } from '../repositories/plafon-biaya.repository';
import { PlafonBiayaStore } from './plafon-biaya.store';
import { PlafonBiaya } from '../models/plafon-biaya.model';

@Injectable({
  providedIn: 'root'
})
export class PlafonBiayaFacade {
  constructor(
    private repository: PlafonBiayaRepository,
    private store: PlafonBiayaStore
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
    this.repository.getPlafonBiayas().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PlafonBiaya | null): void {
    this.store.setSelectedItem(item);
  }
}
