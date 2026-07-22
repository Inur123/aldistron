import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PengirimanRinciBarangFacade } from '../../facades/pengiriman-rinci-barang.facade';

@Component({
  selector: 'app-pengiriman-rinci-barang-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul PengirimanRinciBarang</h1>
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
export class PengirimanRinciBarangListComponent implements OnInit {
  constructor(public facade: PengirimanRinciBarangFacade) {}

  ngOnInit(): void {
    this.facade.loadItems();
  }
}
