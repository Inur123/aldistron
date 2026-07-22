import { Injectable, signal } from '@angular/core';
import { HargaDiskon } from '../models/harga-diskon.model';

@Injectable({
  providedIn: 'root'
})
export class HargaDiskonStore {
  readonly items = signal<HargaDiskon[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HargaDiskon | null>(null);

  setItems(items: HargaDiskon[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HargaDiskon | null): void {
    this.selectedItem.set(item);
  }
}
