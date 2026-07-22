import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AolDatabaseFacade } from '../../facades/aol-database.facade';



@Component({
  selector: 'app-aol-database-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Daftar AOL Database</h1>
      <ul class="space-y-2">
        @for (db of facade.databases(); track db.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ db.namaAoldatabase }} ({{ db.emailAolconnector }})
          </li>
        }
      </ul>
    </div>
  `
})
export class AolDatabaseListComponent implements OnInit {
  constructor(public facade: AolDatabaseFacade) {}

  ngOnInit(): void {
    this.facade.loadDatabases();
  }
}
