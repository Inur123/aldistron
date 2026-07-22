import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorFacade } from '../../facades/vendor.facade';


@Component({
  selector: 'app-vendor-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 bg-slate-900 min-h-screen text-white">
      <h1 class="text-2xl font-bold mb-4">Modul Vendor</h1>
      <ul class="space-y-2">
        @for (v of facade.vendors(); track v.id) {
          <li class="p-4 bg-slate-800 rounded-xl border border-slate-700">
            {{ v.nomorVendor }} - {{ v.namaVendor }} ({{ v.keteranganVendor }})
          </li>
        }
      </ul>
    </div>
  `
})
export class VendorListComponent implements OnInit {
  constructor(public facade: VendorFacade) {}

  ngOnInit(): void {
    this.facade.loadVendors();
  }
}
