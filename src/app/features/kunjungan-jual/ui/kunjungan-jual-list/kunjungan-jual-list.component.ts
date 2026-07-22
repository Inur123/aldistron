import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KunjunganJualFacade } from '../../facades/kunjungan-jual.facade';

@Component({
  selector: 'app-kunjungan-jual-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul KunjunganJual</h1>
      <ul class="space-y-2">
        @for (item of facade.items(); track item.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            ID: {{ item.id }}
          </li>
        }
      </ul>
    </div>
  `
})
export class KunjunganJualListComponent implements OnInit {
  constructor(public facade: KunjunganJualFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
