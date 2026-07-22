import { Injectable } from '@angular/core';
import { EvenkalenderRepository } from '../repositories/evenkalender.repository';
import { EvenkalenderStore } from './evenkalender.store';
import { Evenkalender } from '../models/evenkalender.model';

@Injectable({
  providedIn: 'root'
})
export class EvenkalenderFacade {
  constructor(
    private repository: EvenkalenderRepository,
    private store: EvenkalenderStore
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
    this.repository.getEvenkalenders().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Evenkalender | null): void {
    this.store.setSelectedItem(item);
  }
}
