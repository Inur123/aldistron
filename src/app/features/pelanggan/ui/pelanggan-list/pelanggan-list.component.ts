import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PelangganFacade } from '../../facades/pelanggan.facade';

@Component({
  selector: 'app-pelanggan-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Pelanggan</h1>
      <ul class="space-y-2">
        @for (p of facade.pelanggans(); track p.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ p.nomorPelanggan }} - {{ p.namaPelanggan }} ({{ p.siklusKunjungan }})
          </li>
        }
      </ul>
    </div>
  `
})
export class PelangganListComponent implements OnInit {
  constructor(public facade: PelangganFacade) {}

  ngOnInit(): void {
    this.facade.loadPelanggans();
  }
}
