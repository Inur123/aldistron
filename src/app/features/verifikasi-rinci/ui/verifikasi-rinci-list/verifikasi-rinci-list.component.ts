import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifikasiRinciFacade } from '../../facades/verifikasi-rinci.facade';

@Component({
  selector: 'app-verifikasi-rinci-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Verifikasi Rinci</h1>
      <ul class="space-y-2">
        @for (vr of facade.verifikasiRincis(); track vr.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ vr.namaVendor }} - {{ vr.keteranganKode }}
          </li>
        }
      </ul>
    </div>
  `
})
export class VerifikasiRinciListComponent implements OnInit {
  constructor(public facade: VerifikasiRinciFacade) {}

  ngOnInit(): void {
    this.facade.loadVerifikasiRincis();
  }
}
