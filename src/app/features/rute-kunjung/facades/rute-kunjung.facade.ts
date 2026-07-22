import { Injectable } from '@angular/core';
import { RuteKunjungRepository } from '../repositories/rute-kunjung.repository';
import { RuteKunjungStore } from './rute-kunjung.store';
import { RuteKunjung } from '../models/rute-kunjung.model';

@Injectable({
  providedIn: 'root'
})
export class RuteKunjungFacade {
  constructor(
    private repository: RuteKunjungRepository,
    private store: RuteKunjungStore
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
    this.repository.getRuteKunjungs().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: RuteKunjung | null): void {
    this.store.setSelectedItem(item);
  }
}
