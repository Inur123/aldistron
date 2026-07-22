import { Injectable, signal } from '@angular/core';
import { HariKerja } from '../models/hari-kerja.model';

@Injectable({
  providedIn: 'root'
})
export class HariKerjaStore {
  readonly items = signal<HariKerja[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<HariKerja | null>(null);

  setItems(items: HariKerja[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: HariKerja | null): void {
    this.selectedItem.set(item);
  }
}
