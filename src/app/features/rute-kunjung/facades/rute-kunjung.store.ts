import { Injectable, signal } from '@angular/core';
import { RuteKunjung } from '../models/rute-kunjung.model';

@Injectable({
  providedIn: 'root'
})
export class RuteKunjungStore {
  readonly items = signal<RuteKunjung[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<RuteKunjung | null>(null);

  setItems(items: RuteKunjung[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: RuteKunjung | null): void {
    this.selectedItem.set(item);
  }
}
