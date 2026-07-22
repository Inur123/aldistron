import { Injectable, signal } from '@angular/core';
import { AolGlAkun } from '../models/aol-gl-akun.model';

@Injectable({
  providedIn: 'root'
})
export class AolGlAkunStore {
  readonly aolGlAkuns = signal<AolGlAkun[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedAolGlAkun = signal<AolGlAkun | null>(null);

  setAolGlAkuns(aolGlAkuns: AolGlAkun[]): void {
    this.aolGlAkuns.set(aolGlAkuns);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedAolGlAkun(aolGlAkun: AolGlAkun | null): void {
    this.selectedAolGlAkun.set(aolGlAkun);
  }
}
