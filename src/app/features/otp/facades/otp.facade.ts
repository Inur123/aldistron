import { Injectable } from '@angular/core';
import { OtpRepository } from '../repositories/otp.repository';
import { OtpStore } from './otp.store';
import { Otp } from '../models/otp.model';

@Injectable({
  providedIn: 'root'
})
export class OtpFacade {
  constructor(
    private repository: OtpRepository,
    private store: OtpStore
  ) {}

  get items() {
    return this.store.items;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedItem() {
    return this.store.selectedItem;
  }

  loadItems(): void {
    this.store.setLoading(true);
    this.repository.getOtps().subscribe({
      next: (data) => {
        this.store.setItems(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectItem(item: Otp | null): void {
    this.store.setSelectedItem(item);
  }
}
