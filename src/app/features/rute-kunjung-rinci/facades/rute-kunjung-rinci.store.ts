import { Injectable, signal } from '@angular/core';
import { RuteKunjungRinci } from '../models/rute-kunjung-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class RuteKunjungRinciStore {
  readonly items = signal<RuteKunjungRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<RuteKunjungRinci | null>(null);

  setItems(items: RuteKunjungRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: RuteKunjungRinci | null): void {
    this.selectedItem.set(item);
  }
}
