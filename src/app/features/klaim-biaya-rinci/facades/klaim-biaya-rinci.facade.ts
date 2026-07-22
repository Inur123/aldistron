import { Injectable } from '@angular/core';
import { KlaimBiayaRinciRepository } from '../repositories/klaim-biaya-rinci.repository';
import { KlaimBiayaRinciStore } from './klaim-biaya-rinci.store';
import { KlaimBiayaRinci } from '../models/klaim-biaya-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class KlaimBiayaRinciFacade {
  constructor(
    private repository: KlaimBiayaRinciRepository,
    private store: KlaimBiayaRinciStore
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
    this.repository.getKlaimBiayaRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: KlaimBiayaRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
