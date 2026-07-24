import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HargaPaketService, HargaPaketCombined } from '../../services/harga-paket.service';
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
  Layers,
  ArrowLeft,
  CheckCircle2,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-harga-paket-list',
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
  templateUrl: './harga-paket-list.component.html',
})
export class HargaPaketListComponent implements OnInit {
  private readonly service = inject(HargaPaketService);
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
  readonly layersIcon = Layers;
  readonly arrowLeftIcon = ArrowLeft;
  readonly checkCircleIcon = CheckCircle2;
  readonly xIcon = X;

  items = signal<HargaPaketCombined[]>([]);
  availableProducts = signal<string[]>([]);

  selectedHargaPaketItem = signal<HargaPaketCombined | null>(null);
  panelMode = signal<'view' | 'edit'>('edit');

  // Spartan DatePicker config
  readonly defaultFocusedDate = DateTime.now().toJSDate();
  readonly formatDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('dd MMM yyyy');
  readonly formatInputDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('yyyy-MM-dd');
  readonly parseDate = (value: string): Date | null => {
    const dt = DateTime.fromFormat(value, 'yyyy-MM-dd');
    return dt.isValid ? dt.toJSDate() : null;
  };

  // Form Panel Kiri: Header Program + Produk & Item Bundling Rinci
  formPanel = signal({
    id: 0,
    nama_hargapaket: '',
    keterangan_hargapaket: '',
    awal_hargapaket: '',
    akhir_hargapaket: '',
    tipe_alokasi_hargapaket: 'All Cabang',
    aktif_hargapaket: true,
    // Rinci Form
    nama_produk_utama: '',
    nama_produk_paket: '',
    qty_produk_utama: 1,
    qty_produk_paket: 1,
    kelipatan_paket: true,
  });

  isAddPaketOpen = signal(false);
  formPaket = signal({
    nama_hargapaket: '',
    keterangan_hargapaket: '',
    awal_hargapaket: '',
    akhir_hargapaket: '',
    tipe_alokasi_hargapaket: 'All Cabang',
    aktif_hargapaket: true,
  });

  ngOnInit(): void {
    this.loadData();
    this.productService.getProducts().subscribe((prods) => {
      this.availableProducts.set(prods.map((p) => p.nama_produk));
    });
  }

  loadData(): void {
    this.service.getHargaPakets().subscribe((res) => {
      this.items.set(res);
    });
  }

  selectItemForPanel(item: HargaPaketCombined, mode: 'view' | 'edit' = 'edit'): void {
    this.selectedHargaPaketItem.set(item);
    this.panelMode.set(mode);

    const rinci = item.hargapaketrincis.length > 0 ? item.hargapaketrincis[0] : null;
    const prods = this.availableProducts();

    const awal = item.awal_hargapaket ? DateTime.fromISO(item.awal_hargapaket).toJSDate() : null;
    const akhir = item.akhir_hargapaket ? DateTime.fromISO(item.akhir_hargapaket).toJSDate() : null;

    this.formPanel.set({
      id: item.id,
      nama_hargapaket: item.nama_hargapaket,
      keterangan_hargapaket: item.keterangan_hargapaket,
      awal_hargapaket: awal as any,
      akhir_hargapaket: akhir as any,
      tipe_alokasi_hargapaket: item.tipe_alokasi_hargapaket,
      aktif_hargapaket: item.aktif_hargapaket,
      nama_produk_utama: rinci?.nama_produk_utama || (prods.length > 0 ? prods[0] : 'Laptop Gaming ROG Strix G16'),
      nama_produk_paket: rinci?.nama_produk_paket || 'Monitor Gaming Asus TUF 24 Inch',
      qty_produk_utama: rinci?.qty_produk_utama || 1,
      qty_produk_paket: rinci?.qty_produk_paket || 1,
      kelipatan_paket: rinci?.kelipatan_paket ?? true,
    });
    this.cdr.detectChanges();
  }

  savePanelProduct(): void {
    const data = this.formPanel();
    if (!data.id) return;

    if (data.nama_produk_utama && data.nama_produk_paket) {
      this.service.addHargaPaketRinci(data.id, data.nama_produk_utama, data.nama_produk_paket, {
        qty_produk_utama: data.qty_produk_utama,
        qty_produk_paket: data.qty_produk_paket,
        kelipatan_paket: data.kelipatan_paket,
      } as any).subscribe(() => this.loadData());
    }
  }

  openAddPaketModal(): void {
    this.formPaket.set({
      nama_hargapaket: '',
      keterangan_hargapaket: '',
      awal_hargapaket: new Date().toISOString().split('T')[0],
      akhir_hargapaket: new Date().toISOString().split('T')[0],
      tipe_alokasi_hargapaket: 'All Cabang',
      aktif_hargapaket: true,
    });
    this.isAddPaketOpen.set(true);
  }

  saveHargaPaket(): void {
    const data = this.formPaket();
    if (!data.nama_hargapaket) return;

    this.service.addHargaPaket({
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargapaket: data.nama_hargapaket,
      keterangan_hargapaket: data.keterangan_hargapaket,
      awal_hargapaket: data.awal_hargapaket || new Date().toISOString().split('T')[0],
      akhir_hargapaket: data.akhir_hargapaket || new Date().toISOString().split('T')[0],
      tipe_alokasi_hargapaket: data.tipe_alokasi_hargapaket,
      aktif_hargapaket: data.aktif_hargapaket,
    }).subscribe(() => {
      this.loadData();
      this.isAddPaketOpen.set(false);
    });
  }

  deleteHargaPaket(id: number, event?: Event): void {
    if (event) event.stopPropagation();
    this.service.deleteHargaPaket(id).subscribe(() => {
      this.loadData();
      if (this.selectedHargaPaketItem()?.id === id) {
        this.selectedHargaPaketItem.set(null);
      }
    });
  }
}
