import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HargaDiskonService, HargaDiskonCombined } from '../../services/harga-diskon.service';
import { ProductService } from '../../../product/services/product.service';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmComboboxImports } from '@spartan-ng/helm/combobox';
import { HlmDatePickerImports } from '@spartan-ng/helm/date-picker';
import { DateTime } from 'luxon';
import {
  LucideAngularModule,
  Plus,
  Trash2,
  Tag,
  Package,
  Eye,
  Pencil,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Percent,
  ArrowLeft,
  CheckCircle2,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-harga-diskon-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    HlmInputImports,
    HlmComboboxImports,
    HlmDatePickerImports,
    LucideAngularModule,
  ],
  templateUrl: './harga-diskon-list.component.html',
})
export class HargaDiskonListComponent implements OnInit {
  private readonly service = inject(HargaDiskonService);
  private readonly productService = inject(ProductService);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly plusIcon = Plus;
  readonly trashIcon = Trash2;
  readonly tagIcon = Tag;
  readonly packageIcon = Package;
  readonly eyeIcon = Eye;
  readonly pencilIcon = Pencil;
  readonly arrowUpDownIcon = ArrowUpDown;
  readonly chevronLeftIcon = ChevronLeft;
  readonly chevronRightIcon = ChevronRight;
  readonly percentIcon = Percent;
  readonly arrowLeftIcon = ArrowLeft;
  readonly checkCircleIcon = CheckCircle2;
  readonly xIcon = X;

  items = signal<HargaDiskonCombined[]>([]);
  availableProducts = signal<string[]>([]);

  selectedHargaDiskonItem = signal<HargaDiskonCombined | null>(null);
  panelMode = signal<'view' | 'edit'>('edit');

  // Spartan DatePicker config
  readonly defaultFocusedDate = DateTime.now().toJSDate();
  readonly formatDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('dd MMM yyyy');
  readonly formatInputDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('yyyy-MM-dd');
  readonly parseDate = (value: string): Date | null => {
    const dt = DateTime.fromFormat(value, 'yyyy-MM-dd');
    return dt.isValid ? dt.toJSDate() : null;
  };

  // Form Panel Kiri: Header Program + Produk & Rinci Diskon
  formPanel = signal({
    id: 0,
    nama_hargadiskon: '',
    keterangan_hargadiskon: '',
    awal_hargadiskon: '',
    akhir_hargadiskon: '',
    tipe_alokasi_hargadiskon: 'All Cabang',
    aktif_hargadiskon: true,
    // Rinci Form
    nama_produk_hargadiskon: '',
    nama_unit_hargadiskon: 'Unit',
    diskon_tipe: 'Rupiah' as 'Rupiah' | 'Persentase',
    min_qty_hargadiskon: 1,
    max_qty_hargadiskon: 10,
    diskon_rupiah: 50000,
    diskon_persen: 5,
  });

  isAddDiskonOpen = signal(false);
  formDiskon = signal({
    nama_hargadiskon: '',
    keterangan_hargadiskon: '',
    awal_hargadiskon: '',
    akhir_hargadiskon: '',
    tipe_alokasi_hargadiskon: 'All Cabang',
    aktif_hargadiskon: true,
  });

  ngOnInit(): void {
    this.loadData();
    this.productService.getProducts().subscribe((prods) => {
      this.availableProducts.set(prods.map((p) => p.nama_produk));
    });
  }

  loadData(): void {
    this.service.getHargaDiskons().subscribe((res) => {
      this.items.set(res);
    });
  }

  selectItemForPanel(item: HargaDiskonCombined, mode: 'view' | 'edit' = 'edit'): void {
    this.selectedHargaDiskonItem.set(item);
    this.panelMode.set(mode);

    const prodTarget = item.hargadiskonproduks.length > 0 ? item.hargadiskonproduks[0] : null;
    const rinci = prodTarget && prodTarget.hargadiskonrincis.length > 0 ? prodTarget.hargadiskonrincis[0] : null;
    const prods = this.availableProducts();

    const awal = item.awal_hargadiskon ? DateTime.fromISO(item.awal_hargadiskon).toJSDate() : null;
    const akhir = item.akhir_hargadiskon ? DateTime.fromISO(item.akhir_hargadiskon).toJSDate() : null;

    this.formPanel.set({
      id: item.id,
      nama_hargadiskon: item.nama_hargadiskon,
      keterangan_hargadiskon: item.keterangan_hargadiskon,
      awal_hargadiskon: awal as any,
      akhir_hargadiskon: akhir as any,
      tipe_alokasi_hargadiskon: item.tipe_alokasi_hargadiskon,
      aktif_hargadiskon: item.aktif_hargadiskon,
      nama_produk_hargadiskon: prodTarget?.nama_produk_hargadiskon || (prods.length > 0 ? prods[0] : 'Laptop Gaming ROG Strix G16'),
      nama_unit_hargadiskon: rinci?.nama_unit_hargadiskon || 'Unit',
      diskon_tipe: rinci?.diskon_rupiah ? 'Rupiah' : 'Persentase',
      min_qty_hargadiskon: rinci?.min_qty_hargadiskon || 1,
      max_qty_hargadiskon: rinci?.max_qty_hargadiskon || 10,
      diskon_rupiah: rinci?.diskon_rupiah || 50000,
      diskon_persen: rinci?.diskon_persen || 5,
    });
    this.cdr.detectChanges();
  }

  savePanelProduct(): void {
    const data = this.formPanel();
    if (!data.id) return;

    if (data.nama_produk_hargadiskon) {
      this.service.addProdukDiskonWithRinci(data.id, data.nama_produk_hargadiskon, {
        nama_unit_hargadiskon: data.nama_unit_hargadiskon,
        min_qty_hargadiskon: data.min_qty_hargadiskon,
        max_qty_hargadiskon: data.max_qty_hargadiskon,
        diskon_rupiah: data.diskon_tipe === 'Rupiah' ? data.diskon_rupiah : 0,
        diskon_persen: data.diskon_tipe === 'Persentase' ? data.diskon_persen : 0,
      } as any).subscribe(() => this.loadData());
    }
  }

  openAddDiskonModal(): void {
    this.formDiskon.set({
      nama_hargadiskon: '',
      keterangan_hargadiskon: '',
      awal_hargadiskon: new Date().toISOString().split('T')[0],
      akhir_hargadiskon: new Date().toISOString().split('T')[0],
      tipe_alokasi_hargadiskon: 'All Cabang',
      aktif_hargadiskon: true,
    });
    this.isAddDiskonOpen.set(true);
  }

  saveHargaDiskon(): void {
    const data = this.formDiskon();
    if (!data.nama_hargadiskon) return;

    this.service.addHargaDiskon({
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargadiskon: data.nama_hargadiskon,
      keterangan_hargadiskon: data.keterangan_hargadiskon,
      awal_hargadiskon: data.awal_hargadiskon || new Date().toISOString().split('T')[0],
      akhir_hargadiskon: data.akhir_hargadiskon || new Date().toISOString().split('T')[0],
      tipe_alokasi_hargadiskon: data.tipe_alokasi_hargadiskon,
      aktif_hargadiskon: data.aktif_hargadiskon,
    }).subscribe(() => {
      this.loadData();
      this.isAddDiskonOpen.set(false);
    });
  }

  deleteHargaDiskon(id: number, event?: Event): void {
    if (event) event.stopPropagation();
    this.service.deleteHargaDiskon(id).subscribe(() => {
      this.loadData();
      if (this.selectedHargaDiskonItem()?.id === id) {
        this.selectedHargaDiskonItem.set(null);
      }
    });
  }
}
