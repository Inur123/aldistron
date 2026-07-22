import { Injectable } from '@angular/core';
import { CabangRepository } from '../repositories/cabang.repository';
import { CabangStore } from './cabang.store';
import { Cabang } from '../models/cabang.model';

@Injectable({
  providedIn: 'root'
})
export class CabangFacade {
  constructor(
    private repository: CabangRepository,
    private store: CabangStore
  ) {}

  get cabangs() {
    return this.store.cabangs;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedCabang() {
    return this.store.selectedCabang;
  }

  loadCabangs(): void {
    this.store.setLoading(true);
    this.repository.getCabangs().subscribe({
      next: (data) => {
        this.store.setCabangs(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectCabang(cabang: Cabang | null): void {
    this.store.setSelectedCabang(cabang);
  }
}
