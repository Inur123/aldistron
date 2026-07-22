import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AolGlAkunFacade } from '../../facades/aol-gl-akun.facade';

@Component({
  selector: 'app-aol-gl-akun-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul AOL GL Akun</h1>
      <ul class="space-y-2">
        @for (item of facade.aolGlAkuns(); track item.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ item.nomorAolglakun }} - {{ item.namaAolglakun }} ({{ item.tipeAkun }})
          </li>
        }
      </ul>
    </div>
  `
})
export class AolGlAkunListComponent implements OnInit {
  constructor(public facade: AolGlAkunFacade) {}

  ngOnInit(): void {
    this.facade.loadAolGlAkuns();
  }
}
