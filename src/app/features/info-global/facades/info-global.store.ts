import { Injectable, signal } from '@angular/core';
import { InfoGlobal } from '../models/info-global.model';

@Injectable({
  providedIn: 'root'
})
export class InfoGlobalStore {
  readonly items = signal<InfoGlobal[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<InfoGlobal | null>(null);

  setItems(items: InfoGlobal[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: InfoGlobal | null): void {
    this.selectedItem.set(item);
  }
}
