import { Injectable, signal } from '@angular/core';
import { Keycode } from '../models/keycode.model';

@Injectable({
  providedIn: 'root'
})
export class KeycodeStore {
  readonly items = signal<Keycode[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Keycode | null>(null);

  setItems(items: Keycode[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Keycode | null): void {
    this.selectedItem.set(item);
  }
}
