import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceFacade } from '../../facades/province.facade';

@Component({
  selector: 'app-province-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Province</h1>
      <ul class="space-y-2">
        @for (item of facade.items(); track item.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ item.name }}
          </li>
        }
      </ul>
    </div>
  `
})
export class ProvinceListComponent implements OnInit {
  constructor(public facade: ProvinceFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
