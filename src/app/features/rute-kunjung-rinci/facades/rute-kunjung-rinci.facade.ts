import { Injectable } from '@angular/core';
import { RuteKunjungRinciRepository } from '../repositories/rute-kunjung-rinci.repository';
import { RuteKunjungRinciStore } from './rute-kunjung-rinci.store';
import { RuteKunjungRinci } from '../models/rute-kunjung-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class RuteKunjungRinciFacade {
  constructor(
    private repository: RuteKunjungRinciRepository,
    private store: RuteKunjungRinciStore
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
    this.repository.getRuteKunjungRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: RuteKunjungRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
