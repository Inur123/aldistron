import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PelangganPoinFacade } from '../../facades/pelanggan-poin.facade';

@Component({
  selector: 'app-pelanggan-poin-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Pelanggan Poin</h1>
      <ul class="space-y-2">
        @for (p of facade.poins(); track p.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ p.namaEvent }} - Saldo Poin: {{ p.poinSaldo }}
          </li>
        }
      </ul>
    </div>
  `
})
export class PelangganPoinListComponent implements OnInit {
  constructor(public facade: PelangganPoinFacade) {}

  ngOnInit(): void {
    this.facade.loadPoins();
  }
}
