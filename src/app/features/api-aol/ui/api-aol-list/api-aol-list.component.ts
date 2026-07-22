import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiAolFacade } from '../../facades/api-aol.facade';

@Component({
  selector: 'app-api-aol-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul API AOL</h1>
      <ul class="space-y-2">
        @for (item of facade.apiAols(); track item.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ item.namaApiaol }} - [{{ item.methodApiaol }}] {{ item.urlApiaol }}
          </li>
        }
      </ul>
    </div>
  `
})
export class ApiAolListComponent implements OnInit {
  constructor(public facade: ApiAolFacade) {}

  ngOnInit(): void {
    this.facade.loadApiAols();
  }
}
