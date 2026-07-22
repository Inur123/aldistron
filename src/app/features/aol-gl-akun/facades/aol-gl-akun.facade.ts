import { Injectable } from '@angular/core';
import { AolGlAkunRepository } from '../repositories/aol-gl-akun.repository';
import { AolGlAkunStore } from './aol-gl-akun.store';
import { AolGlAkun } from '../models/aol-gl-akun.model';

@Injectable({
  providedIn: 'root'
})
export class AolGlAkunFacade {
  constructor(
    private repository: AolGlAkunRepository,
    private store: AolGlAkunStore
  ) {}

  get aolGlAkuns() {
    return this.store.aolGlAkuns;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedAolGlAkun() {
    return this.store.selectedAolGlAkun;
  }

  loadAolGlAkuns(): void {
    this.store.setLoading(true);
    this.repository.getAolGlAkuns().subscribe({
      next: (data) => {
        this.store.setAolGlAkuns(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectAolGlAkun(aolGlAkun: AolGlAkun | null): void {
    this.store.setSelectedAolGlAkun(aolGlAkun);
  }
}
