import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AolTaxFacade } from '../../facades/aol-tax.facade';

@Component({
  selector: 'app-aol-tax-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul AOL Tax</h1>
      <ul class="space-y-2">
        @for (item of facade.aolTaxes(); track item.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ item.namaTax }} - Nilai: {{ item.nilaiTax }}% ({{ item.keteranganTax }})
          </li>
        }
      </ul>
    </div>
  `
})
export class AolTaxListComponent implements OnInit {
  constructor(public facade: AolTaxFacade) {}

  ngOnInit(): void {
    this.facade.loadAolTaxes();
  }
}
