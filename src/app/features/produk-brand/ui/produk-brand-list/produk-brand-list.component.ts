import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProdukBrandFacade } from '../../facades/produk-brand.facade';
import { HlmInputImports } from '@spartan-ng/helm/input';
import {
  LucideAngularModule,
  RefreshCw,
  Eye,
  Pencil,
  Trash2,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-produk-brand-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, HlmInputImports, LucideAngularModule],
  templateUrl: './produk-brand-list.component.html',
})
export class ProdukBrandListComponent implements OnInit {
  readonly facade = inject(ProdukBrandFacade);
  readonly refreshIcon = RefreshCw;
  readonly eyeIcon = Eye;
  readonly pencilIcon = Pencil;
  readonly trashIcon = Trash2;
  readonly arrowUpDownIcon = ArrowUpDown;
  readonly chevronLeftIcon = ChevronLeft;
  readonly chevronRightIcon = ChevronRight;
  readonly plusIcon = Plus;
  readonly xIcon = X;

  isAddModalOpen = signal(false);
  modalMode = signal<'view' | 'edit'>('edit');
  selectedBrandId = signal<number | null>(null);

  formBrand = signal({
    namaBrand: '',
    keteranganBrand: '',
  });

  ngOnInit(): void {
    this.facade.loadBrands();
  }

  openAddModal(): void {
    this.selectedBrandId.set(null);
    this.modalMode.set('edit');
    this.formBrand.set({
      namaBrand: '',
      keteranganBrand: '',
    });
    this.isAddModalOpen.set(true);
  }

  openViewModal(brand: any): void {
    this.selectedBrandId.set(brand.id);
    this.modalMode.set('view');
    this.formBrand.set({
      namaBrand: brand.namaBrand || '',
      keteranganBrand: brand.keteranganBrand || '',
    });
    this.isAddModalOpen.set(true);
  }

  openEditModal(brand: any): void {
    this.selectedBrandId.set(brand.id);
    this.modalMode.set('edit');
    this.formBrand.set({
      namaBrand: brand.namaBrand || '',
      keteranganBrand: brand.keteranganBrand || '',
    });
    this.isAddModalOpen.set(true);
  }

  saveBrand(): void {
    const data = this.formBrand();
    if (!data.namaBrand) return;

    const brandId = this.selectedBrandId();
    if (brandId) {
      this.facade.updateBrand({
        id: brandId,
        namaBrand: data.namaBrand,
        keteranganBrand: data.keteranganBrand,
      } as any);
    } else {
      this.facade.addBrand({
        id: Date.now(),
        namaBrand: data.namaBrand,
        keteranganBrand: data.keteranganBrand,
      } as any);
    }

    this.isAddModalOpen.set(false);
  }

  deleteBrand(id: number): void {
    this.facade.deleteBrand(id);
  }
}
