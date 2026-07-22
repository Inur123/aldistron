import { Injectable, signal } from '@angular/core';
import { Cabang } from '../models/cabang.model';

@Injectable({
  providedIn: 'root'
})
export class CabangStore {
  readonly cabangs = signal<Cabang[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedCabang = signal<Cabang | null>(null);

  setCabangs(cabangs: Cabang[]): void {
    this.cabangs.set(cabangs);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedCabang(cabang: Cabang | null): void {
    this.selectedCabang.set(cabang);
  }
}
