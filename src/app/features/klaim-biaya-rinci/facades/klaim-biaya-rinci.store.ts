import { Injectable, signal } from '@angular/core';
import { KlaimBiayaRinci } from '../models/klaim-biaya-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class KlaimBiayaRinciStore {
  readonly items = signal<KlaimBiayaRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<KlaimBiayaRinci | null>(null);

  setItems(items: KlaimBiayaRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: KlaimBiayaRinci | null): void {
    this.selectedItem.set(item);
  }
}
