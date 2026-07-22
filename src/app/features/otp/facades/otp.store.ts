import { Injectable, signal } from '@angular/core';
import { Otp } from '../models/otp.model';

@Injectable({
  providedIn: 'root'
})
export class OtpStore {
  readonly items = signal<Otp[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedItem = signal<Otp | null>(null);

  setItems(items: Otp[]): void {
    this.items.set(items);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedItem(item: Otp | null): void {
    this.selectedItem.set(item);
  }
}
