import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifikasiFacade } from '../../facades/verifikasi.facade';


@Component({
  selector: 'app-verifikasi-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Verifikasi</h1>
      <ul class="space-y-2">
        @for (v of facade.verifikasis(); track v.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ v.perusahaan }} - Serial: {{ v.serialNumber }} ({{ v.serialAktif ? 'Aktif' : 'Non-Aktif' }})
          </li>
        }
      </ul>
    </div>
  `
})
export class VerifikasiListComponent implements OnInit {
  constructor(public facade: VerifikasiFacade) {}

  ngOnInit(): void {
    this.facade.loadVerifikasis();
  }
}
