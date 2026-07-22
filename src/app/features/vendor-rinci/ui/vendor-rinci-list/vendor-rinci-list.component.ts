import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRinciFacade } from '../../facades/vendor-rinci.facade';


@Component({
  selector: 'app-vendor-rinci-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Vendor Rinci</h1>
      <ul class="space-y-2">
        @for (vr of facade.vendorRincis(); track vr.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ vr.namaVendor }} - Kontak: {{ vr.kontakVendor }} ({{ vr.handphoneVendor }})
          </li>
        }
      </ul>
    </div>
  `
})
export class VendorRinciListComponent implements OnInit {
  constructor(public facade: VendorRinciFacade) {}

  ngOnInit(): void {
    this.facade.loadVendorRincis();
  }
}
