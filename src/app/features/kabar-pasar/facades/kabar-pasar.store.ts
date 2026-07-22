import { Injectable, signal } from '@angular/core';
import { KabarPasar } from '../models/kabar-pasar.model';

@Injectable({
  providedIn: 'root'
})
export class KabarPasarStore {
  readonly items = signal<KabarPasar[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<KabarPasar | null>(null);

  setItems(items: KabarPasar[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: KabarPasar | null): void {
    this.selectedItem.set(item);
  }
}
