import { Injectable, signal } from '@angular/core';
import { Pengaturan } from '../models/pengaturan.model';

@Injectable({
  providedIn: 'root'
})
export class PengaturanStore {
  readonly pengaturans = signal<Pengaturan[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedPengaturan = signal<Pengaturan | null>(null);

  setPengaturans(pengaturans: Pengaturan[]): void {
    this.pengaturans.set(pengaturans);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedPengaturan(pengaturan: Pengaturan | null): void {
    this.selectedPengaturan.set(pengaturan);
  }
}
