import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DashboardRepository } from '../repositories/dashboard.repository';
import { DashboardSummary } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardFacade {
  readonly summary = signal<DashboardSummary | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  constructor(private repository: DashboardRepository) {}

  loadDashboardSummary(): Observable<DashboardSummary> {
    this.isLoading.set(true);
    return this.repository.getDashboardSummary().pipe(
      tap({
        next: (data) => {
          this.summary.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.error.set(err.message || 'Gagal memuat statistik dashboard');
          this.isLoading.set(false);
        }
      })
    );
  }
}
