import { Injectable } from '@angular/core';
import { KeycodeRepository } from '../repositories/keycode.repository';
import { KeycodeStore } from './keycode.store';
import { Keycode } from '../models/keycode.model';

@Injectable({
  providedIn: 'root'
})
export class KeycodeFacade {
  constructor(
    private repository: KeycodeRepository,
    private store: KeycodeStore
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
    this.repository.getKeycodes().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Keycode | null): void {
    this.store.setSelectedItem(item);
  }
}
