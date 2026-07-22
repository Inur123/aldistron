import { Injectable, signal } from '@angular/core';
import { SiteLog } from '../models/site-log.model';

@Injectable({
  providedIn: 'root'
})
export class SiteLogStore {
  readonly items = signal<SiteLog[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<SiteLog | null>(null);

  setItems(items: SiteLog[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: SiteLog | null): void {
    this.selectedItem.set(item);
  }
}
