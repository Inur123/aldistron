import { Injectable } from '@angular/core';
import { AolDatabaseRepository } from '../repositories/aol-database.repository';
import { AolDatabaseStore } from './aol-database.store';
import { AolDatabase } from '../models/aol-database.model';

@Injectable({
  providedIn: 'root'
})
export class AolDatabaseFacade {
  constructor(
    private repository: AolDatabaseRepository,
    private store: AolDatabaseStore
  ) {}

  get databases() {
    return this.store.databases;
  }

  get isLoading() {
    return this.store.isLoading;
  }

  get selectedDatabase() {
    return this.store.selectedDatabase;
  }

  loadDatabases(): void {
    this.store.setLoading(true);
    this.repository.getDatabases().subscribe({
      next: (data) => {
        this.store.setDatabases(data);
        this.store.setLoading(false);
      },
      error: () => this.store.setLoading(false)
    });
  }

  selectDatabase(database: AolDatabase | null): void {
    this.store.setSelectedDatabase(database);
  }
}
