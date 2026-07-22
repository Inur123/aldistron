import { Injectable } from '@angular/core';
import { KlaimBiayaRepository } from '../repositories/klaim-biaya.repository';
import { KlaimBiayaStore } from './klaim-biaya.store';
import { KlaimBiaya } from '../models/klaim-biaya.model';

@Injectable({
  providedIn: 'root'
})
export class KlaimBiayaFacade {
  constructor(
    private repository: KlaimBiayaRepository,
    private store: KlaimBiayaStore
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
    this.repository.getKlaimBiayas().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: KlaimBiaya | null): void {
    this.store.setSelectedItem(item);
  }
}
