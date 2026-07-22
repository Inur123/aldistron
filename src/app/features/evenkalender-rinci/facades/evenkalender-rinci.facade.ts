import { Injectable } from '@angular/core';
import { EvenkalenderRinciRepository } from '../repositories/evenkalender-rinci.repository';
import { EvenkalenderRinciStore } from './evenkalender-rinci.store';
import { EvenkalenderRinci } from '../models/evenkalender-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class EvenkalenderRinciFacade {
  constructor(
    private repository: EvenkalenderRinciRepository,
    private store: EvenkalenderRinciStore
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
    this.repository.getEvenkalenderRincis().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: EvenkalenderRinci | null): void {
    this.store.setSelectedItem(item);
  }
}
