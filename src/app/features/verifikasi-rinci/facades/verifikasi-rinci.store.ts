import { Injectable, signal } from '@angular/core';
import { VerifikasiRinci } from '../models/verifikasi-rinci.model';

@Injectable({
  providedIn: 'root'
})
export class VerifikasiRinciStore {
  readonly verifikasiRincis = signal<VerifikasiRinci[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedVerifikasiRinci = signal<VerifikasiRinci | null>(null);

  setVerifikasiRincis(verifikasiRincis: VerifikasiRinci[]): void {
    this.verifikasiRincis.set(verifikasiRincis);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedVerifikasiRinci(verifikasiRinci: VerifikasiRinci | null): void {
    this.selectedVerifikasiRinci.set(verifikasiRinci);
  }
}
