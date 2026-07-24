import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProdukKategoriFacade } from '../../facades/produk-kategori.facade';
import { HlmInputImports } from '@spartan-ng/helm/input';
import {
  LucideAngularModule,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Eye,
  Pencil,
  Trash2,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-produk-kategori-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, HlmInputImports, LucideAngularModule],
  templateUrl: './produk-kategori-list.component.html',
})
export class ProdukKategoriListComponent implements OnInit {
  readonly facade = inject(ProdukKategoriFacade);
  readonly arrowUpDownIcon = ArrowUpDown;
  readonly chevronLeftIcon = ChevronLeft;
  readonly chevronRightIcon = ChevronRight;
  readonly plusIcon = Plus;
  readonly eyeIcon = Eye;
  readonly pencilIcon = Pencil;
  readonly trashIcon = Trash2;
  readonly xIcon = X;

  isAddModalOpen = signal(false);
  modalMode = signal<'view' | 'edit'>('edit');
  selectedCategoryId = signal<number | null>(null);

  formKategori = signal({
    namaKategori: '',
    keteranganKategori: '',
  });

  ngOnInit(): void {
    this.facade.loadCategories();
  }

  openAddModal(): void {
    this.selectedCategoryId.set(null);
    this.modalMode.set('edit');
    this.formKategori.set({
      namaKategori: '',
      keteranganKategori: '',
    });
    this.isAddModalOpen.set(true);
  }

  openViewModal(category: any): void {
    this.selectedCategoryId.set(category.id);
    this.modalMode.set('view');
    this.formKategori.set({
      namaKategori: category.namaKategori || '',
      keteranganKategori: category.keteranganKategori || '',
    });
    this.isAddModalOpen.set(true);
  }

  openEditModal(category: any): void {
    this.selectedCategoryId.set(category.id);
    this.modalMode.set('edit');
    this.formKategori.set({
      namaKategori: category.namaKategori || '',
      keteranganKategori: category.keteranganKategori || '',
    });
    this.isAddModalOpen.set(true);
  }

  saveKategori(): void {
    const data = this.formKategori();
    if (!data.namaKategori) return;

    const catId = this.selectedCategoryId();
    if (catId) {
      this.facade.updateCategory({
        id: catId,
        namaKategori: data.namaKategori,
        keteranganKategori: data.keteranganKategori,
      } as any);
    } else {
      this.facade.addCategory({
        id: Date.now(),
        namaKategori: data.namaKategori,
        keteranganKategori: data.keteranganKategori,
      } as any);
    }

    this.isAddModalOpen.set(false);
  }

  deleteCategory(id: number): void {
    this.facade.deleteCategory(id);
  }
}
