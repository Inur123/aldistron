import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JangkaPiutangFacade } from '../../facades/jangka-piutang.facade';


@Component({
  selector: 'app-jangka-piutang-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Jangka Piutang</h1>
      <ul class="space-y-2">
        @for (j of facade.jangkaPiutangs(); track j.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ j.namaJangkapiutang }} - {{ j.hariJangkapiutang }} Hari
          </li>
        }
      </ul>
    </div>
  `
})
export class JangkaPiutangListComponent implements OnInit {
  constructor(public facade: JangkaPiutangFacade) {}

  ngOnInit(): void {
    this.facade.loadJangkaPiutangs();
  }
}
