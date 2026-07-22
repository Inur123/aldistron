import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabangFacade } from '../../facades/cabang.facade';


@Component({
  selector: 'app-cabang-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Cabang</h1>
      <ul class="space-y-2">
        @for (c of facade.cabangs(); track c.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            Cabang #{{ c.namaCabang }} - {{ c.alamatCabang }} ({{ c.telpCabang }})
          </li>
        }
      </ul>
    </div>
  `
})
export class CabangListComponent implements OnInit {
  constructor(public facade: CabangFacade) {}

  ngOnInit(): void {
    this.facade.loadCabangs();
  }
}
