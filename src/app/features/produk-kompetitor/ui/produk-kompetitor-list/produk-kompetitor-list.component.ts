import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProdukKompetitorFacade } from '../../facades/produk-kompetitor.facade';
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
  selector: 'app-produk-kompetitor-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, HlmInputImports, LucideAngularModule],
  templateUrl: './produk-kompetitor-list.component.html',
})
export class ProdukKompetitorListComponent implements OnInit {
  readonly facade = inject(ProdukKompetitorFacade);
  readonly arrowUpDownIcon = ArrowUpDown;
  readonly chevronLeftIcon = ChevronLeft;
  readonly chevronRightIcon = ChevronRight;
  readonly plusIcon = Plus;
  readonly eyeIcon = Eye;
  readonly pencilIcon = Pencil;
  readonly trashIcon = Trash2;
  readonly xIcon = X;

  isAddModalOpen = signal(false);
  formKompetitor = signal({
    namaProduk: '',
    produsenProduk: '',
    alamatProdusen: '',
    jenisProduk: 'Barang',
    barcodeProduk: '',
  });

  ngOnInit(): void {
    this.facade.loadKompetitors();
  }

  openAddModal(): void {
    this.formKompetitor.set({
      namaProduk: '',
      produsenProduk: '',
      alamatProdusen: '',
      jenisProduk: 'Barang',
      barcodeProduk: '899' + Math.floor(100000000 + Math.random() * 900000000),
    });
    this.isAddModalOpen.set(true);
  }

  saveKompetitor(): void {
    const data = this.formKompetitor();
    if (!data.namaProduk) return;
    this.isAddModalOpen.set(false);
  }
}
