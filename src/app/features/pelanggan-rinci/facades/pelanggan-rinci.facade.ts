import { Injectable } from '@angular/core';
import { PelangganRinciRepository } from '../repositories/pelanggan-rinci.repository';
import { PelangganRinciStore } from './pelanggan-rinci.store';
import { PelangganRinci } from '../models/pelanggan-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class PelangganRinciFacade {
  constructor(
    private repository: PelangganRinciRepository,
    private store: PelangganRinciStore
  ) {}

  get pelangganRincis() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedItem() {
    return this.store.selectedItem;
  }

  loadPelangganRincis(): void {
    this.store.setLoading(true);
    this.repository.getPelangganRincis().subscribe({
      next: (data: PelangganRinci[]) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PelangganRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
