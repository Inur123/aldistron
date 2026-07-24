import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HargaPromoService, HargaPromoCombined } from '../../services/harga-promo.service';
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
  Gift,
  ArrowLeft,
  CheckCircle2,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-harga-promo-list',
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
  templateUrl: './harga-promo-list.component.html',
})
export class HargaPromoListComponent implements OnInit {
  private readonly service = inject(HargaPromoService);
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
  readonly giftIcon = Gift;
  readonly arrowLeftIcon = ArrowLeft;
  readonly checkCircleIcon = CheckCircle2;
  readonly xIcon = X;

  items = signal<HargaPromoCombined[]>([]);
  availableProducts = signal<string[]>([]);

  selectedHargaPromoItem = signal<HargaPromoCombined | null>(null);
  panelMode = signal<'view' | 'edit'>('edit');

  // Spartan DatePicker config
  readonly defaultFocusedDate = DateTime.now().toJSDate();
  readonly formatDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('dd MMM yyyy');
  readonly formatInputDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('yyyy-MM-dd');
  readonly parseDate = (value: string): Date | null => {
    const dt = DateTime.fromFormat(value, 'yyyy-MM-dd');
    return dt.isValid ? dt.toJSDate() : null;
  };

  // Form Panel Kiri: Header Program + Produk Promo & Bonus Rinci
  formPanel = signal({
    id: 0,
    nama_hargapromo: '',
    keterangan_hargapromo: '',
    awal_hargapromo: '',
    akhir_hargapromo: '',
    tipe_alokasi_hargapromo: 'All Cabang',
    aktif_hargapromo: true,
    // Rinci Form
    nama_produk_hargapromo: '',
    nama_produk_bonus: '',
    nama_unit_hargapromo: 'Pcs',
    qty_bonus: 1,
    nilai_bonus: 350000,
  });

  isAddPromoOpen = signal(false);
  formPromo = signal({
    nama_hargapromo: '',
    keterangan_hargapromo: '',
    awal_hargapromo: '',
    akhir_hargapromo: '',
    tipe_alokasi_hargapromo: 'All Cabang',
    aktif_hargapromo: true,
  });

  ngOnInit(): void {
    this.loadData();
    this.productService.getProducts().subscribe((prods) => {
      this.availableProducts.set(prods.map((p) => p.nama_produk));
    });
  }

  loadData(): void {
    this.service.getHargaPromos().subscribe((res) => {
      this.items.set(res);
    });
  }

  selectItemForPanel(item: HargaPromoCombined, mode: 'view' | 'edit' = 'edit'): void {
    this.selectedHargaPromoItem.set(item);
    this.panelMode.set(mode);

    const prodTarget = item.hargapromoproduks.length > 0 ? item.hargapromoproduks[0] : null;
    const rinci = prodTarget && prodTarget.hargapromorincis.length > 0 ? prodTarget.hargapromorincis[0] : null;
    const prods = this.availableProducts();

    const awal = item.awal_hargapromo ? DateTime.fromISO(item.awal_hargapromo).toJSDate() : null;
    const akhir = item.akhir_hargapromo ? DateTime.fromISO(item.akhir_hargapromo).toJSDate() : null;

    this.formPanel.set({
      id: item.id,
      nama_hargapromo: item.nama_hargapromo,
      keterangan_hargapromo: item.keterangan_hargapromo,
      awal_hargapromo: awal as any,
      akhir_hargapromo: akhir as any,
      tipe_alokasi_hargapromo: item.tipe_alokasi_hargapromo,
      aktif_hargapromo: item.aktif_hargapromo,
      nama_produk_hargapromo: prodTarget?.nama_produk_hargapromo || (prods.length > 0 ? prods[0] : 'Laptop Gaming ROG Strix G16'),
      nama_produk_bonus: rinci?.nama_produk_bonus || 'ROG Gaming Mousepad RGB',
      nama_unit_hargapromo: rinci?.nama_unit_hargapromo || 'Pcs',
      qty_bonus: rinci?.qty_bonus || 1,
      nilai_bonus: rinci?.nilai_bonus || 350000,
    });
    this.cdr.detectChanges();
  }

  savePanelProduct(): void {
    const data = this.formPanel();
    if (!data.id) return;

    if (data.nama_produk_hargapromo) {
      this.service.addProdukPromoWithRinci(data.id, data.nama_produk_hargapromo, {
        nama_produk_bonus: data.nama_produk_bonus,
        nama_unit_hargapromo: data.nama_unit_hargapromo,
        qty_bonus: data.qty_bonus,
        nilai_bonus: data.nilai_bonus,
      } as any).subscribe(() => this.loadData());
    }
  }

  openAddPromoModal(): void {
    this.formPromo.set({
      nama_hargapromo: '',
      keterangan_hargapromo: '',
      awal_hargapromo: new Date().toISOString().split('T')[0],
      akhir_hargapromo: new Date().toISOString().split('T')[0],
      tipe_alokasi_hargapromo: 'All Cabang',
      aktif_hargapromo: true,
    });
    this.isAddPromoOpen.set(true);
  }

  saveHargaPromo(): void {
    const data = this.formPromo();
    if (!data.nama_hargapromo) return;

    this.service.addHargaPromo({
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargapromo: data.nama_hargapromo,
      keterangan_hargapromo: data.keterangan_hargapromo,
      awal_hargapromo: data.awal_hargapromo || new Date().toISOString().split('T')[0],
      akhir_hargapromo: data.akhir_hargapromo || new Date().toISOString().split('T')[0],
      tipe_alokasi_hargapromo: data.tipe_alokasi_hargapromo,
      aktif_hargapromo: data.aktif_hargapromo,
    }).subscribe(() => {
      this.loadData();
      this.isAddPromoOpen.set(false);
    });
  }

  deleteHargaPromo(id: number, event?: Event): void {
    if (event) event.stopPropagation();
    this.service.deleteHargaPromo(id).subscribe(() => {
      this.loadData();
      if (this.selectedHargaPromoItem()?.id === id) {
        this.selectedHargaPromoItem.set(null);
      }
    });
  }
}
