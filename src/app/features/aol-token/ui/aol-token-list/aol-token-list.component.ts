import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AolTokenFacade } from '../../facades/aol-token.facade';

@Component({
  selector: 'app-aol-token-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul AOL Token</h1>
      <ul class="space-y-2">
        @for (item of facade.aolTokens(); track item.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ item.aoluserName }} ({{ item.aoluserEmail }}) - Kode Seri: {{ item.kodeseriKoneksi }}
          </li>
        }
      </ul>
    </div>
  `
})
export class AolTokenListComponent implements OnInit {
  constructor(public facade: AolTokenFacade) {}

  ngOnInit(): void {
    this.facade.loadAolTokens();
  }
}
