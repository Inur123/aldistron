import { Injectable, signal } from '@angular/core';
import { ArmadaRinci } from '../models/armada-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class ArmadaRinciStore {
  readonly items = signal<ArmadaRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<ArmadaRinci | null>(null);

  setItems(items: ArmadaRinci[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: ArmadaRinci | null): void {
    this.selectedItem.set(item);
  }
}
