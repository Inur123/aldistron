import { Injectable, signal } from '@angular/core';
import { Verifikasi } from '../models/verifikasi.model';

@Injectable({
  providedIn: 'root'
})
export class VerifikasiStore {
  readonly verifikasis = signal<Verifikasi[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedVerifikasi = signal<Verifikasi | null>(null);

  setVerifikasis(verifikasis: Verifikasi[]): void {
    this.verifikasis.set(verifikasis);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedVerifikasi(verifikasi: Verifikasi | null): void {
    this.selectedVerifikasi.set(verifikasi);
  }
}
