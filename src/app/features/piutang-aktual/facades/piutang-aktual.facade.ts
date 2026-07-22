import { Injectable } from '@angular/core';
import { PiutangAktualRepository } from '../repositories/piutang-aktual.repository';
import { PiutangAktualStore } from './piutang-aktual.store';
import { PiutangAktual } from '../models/piutang-aktual.model';

@Injectable({
  providedIn: 'root'
})
export class PiutangAktualFacade {
  constructor(
    private repository: PiutangAktualRepository,
    private store: PiutangAktualStore
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
    this.repository.getPiutangAktuals().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: PiutangAktual | null): void {
    this.store.setSelectedItem(item);
  }
}
