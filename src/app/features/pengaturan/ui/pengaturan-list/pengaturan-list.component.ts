import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PengaturanFacade } from '../../facades/pengaturan.facade';


@Component({
  selector: 'app-pengaturan-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Pengaturan</h1>
      <ul class="space-y-2">
        @for (p of facade.pengaturans(); track p.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ p.namaParam }} ({{ p.parameter }}): {{ p.paramString }}
          </li>
        }
      </ul>
    </div>
  `
})
export class PengaturanListComponent implements OnInit {
  constructor(public facade: PengaturanFacade) {}

  ngOnInit(): void {
    this.facade.loadPengaturans();
  }
}
