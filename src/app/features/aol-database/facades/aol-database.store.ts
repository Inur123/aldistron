import { Injectable, signal } from '@angular/core';
import { AolDatabase } from '../models/aol-database.model';

@Injectable({
  providedIn: 'root'
})
export class AolDatabaseStore {
  readonly databases = signal<AolDatabase[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedDatabase = signal<AolDatabase | null>(null);

  setDatabases(databases: AolDatabase[]): void {
    this.databases.set(databases);
  }

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }

  setSelectedDatabase(database: AolDatabase | null): void {
    this.selectedDatabase.set(database);
  }
}
