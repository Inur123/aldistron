import { Injectable, signal } from '@angular/core';
import { HargaDiskonRinci } from '../models/harga-diskon-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonRinciStore {
  readonly items = signal<HargaDiskonRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaDiskonRinci | null>(null);

  setItems(items: HargaDiskonRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaDiskonRinci | null): void {
    this.selectedItem.set(item);
  }
}
