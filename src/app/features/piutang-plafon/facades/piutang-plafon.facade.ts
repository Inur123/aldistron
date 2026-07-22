import { Injectable } from '@angular/core';
import { PiutangPlafonRepository } from '../repositories/piutang-plafon.repository';
import { PiutangPlafonStore } from './piutang-plafon.store';
import { PiutangPlafon } from '../models/piutang-plafon.model';

@Injectable({
  providedIn: 'root'
})
export class PiutangPlafonFacade {
  constructor(
    private repository: PiutangPlafonRepository,
    private store: PiutangPlafonStore
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
    this.repository.getPiutangPlafons().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PiutangPlafon | null): void {
    this.store.setSelectedItem(item);
  }
}
