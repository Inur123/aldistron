import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HargaMomenService, HargaMomenCombined } from '../../services/harga-momen.service';
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
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-harga-momen-list',
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
  templateUrl: './harga-momen-list.component.html',
})
export class HargaMomenListComponent implements OnInit {
  private readonly service = inject(HargaMomenService);
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
  readonly sparklesIcon = Sparkles;
  readonly arrowLeftIcon = ArrowLeft;
  readonly checkCircleIcon = CheckCircle2;
  readonly xIcon = X;

  items = signal<HargaMomenCombined[]>([]);
  availableProducts = signal<string[]>([]);

  selectedHargaMomenItem = signal<HargaMomenCombined | null>(null);
  panelMode = signal<'view' | 'edit'>('edit');

  // Spartan DatePicker config
  readonly defaultFocusedDate = DateTime.now().toJSDate();
  readonly formatDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('dd MMM yyyy');
  readonly formatInputDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('yyyy-MM-dd');
  readonly parseDate = (value: string): Date | null => {
    const dt = DateTime.fromFormat(value, 'yyyy-MM-dd');
    return dt.isValid ? dt.toJSDate() : null;
  };

  // Form Panel Kiri: Header Program + Produk & Diskon Momen Rinci
  formPanel = signal({
    id: 0,
    nama_hargamomen: '',
    keterangan_hargamomen: '',
    awal_hargamomen: '',
    akhir_hargamomen: '',
    tipe_alokasi_hargamomen: 'All Cabang',
    aktif_hargamomen: true,
    // Rinci Form
    nama_produk: '',
    tipe_momen: 'Flash Sale Harbolnas 11.11',
    potongan_rupiah: 500000,
    potongan_persen: 0,
    poin_hargamomen: 500,
  });

  isAddMomenOpen = signal(false);
  formMomen = signal({
    nama_hargamomen: '',
    keterangan_hargamomen: '',
    awal_hargamomen: '',
    akhir_hargamomen: '',
    tipe_alokasi_hargamomen: 'All Cabang',
    aktif_hargamomen: true,
  });

  ngOnInit(): void {
    this.loadData();
    this.productService.getProducts().subscribe((prods) => {
      this.availableProducts.set(prods.map((p) => p.nama_produk));
    });
  }

  loadData(): void {
    this.service.getHargaMomens().subscribe((res) => {
      this.items.set(res);
    });
  }

  selectItemForPanel(item: HargaMomenCombined, mode: 'view' | 'edit' = 'edit'): void {
    this.selectedHargaMomenItem.set(item);
    this.panelMode.set(mode);

    const rinci = item.hargamomenrincis.length > 0 ? item.hargamomenrincis[0] : null;
    const prods = this.availableProducts();

    const awal = item.awal_hargamomen ? DateTime.fromISO(item.awal_hargamomen).toJSDate() : null;
    const akhir = item.akhir_hargamomen ? DateTime.fromISO(item.akhir_hargamomen).toJSDate() : null;

    this.formPanel.set({
      id: item.id,
      nama_hargamomen: item.nama_hargamomen,
      keterangan_hargamomen: item.keterangan_hargamomen,
      awal_hargamomen: awal as any,
      akhir_hargamomen: akhir as any,
      tipe_alokasi_hargamomen: item.tipe_alokasi_hargamomen,
      aktif_hargamomen: item.aktif_hargamomen,
      nama_produk: rinci?.nama_produk || (prods.length > 0 ? prods[0] : 'Laptop Gaming ROG Strix G16'),
      tipe_momen: rinci?.tipe_momen || 'Flash Sale Harbolnas 11.11',
      potongan_rupiah: rinci?.potongan_rupiah || 500000,
      potongan_persen: rinci?.potongan_persen || 0,
      poin_hargamomen: rinci?.poin_hargamomen || 500,
    });
    this.cdr.detectChanges();
  }

  savePanelProduct(): void {
    const data = this.formPanel();
    if (!data.id) return;

    if (data.nama_produk) {
      this.service.addHargaMomenRinci(data.id, data.nama_produk, {
        tipe_momen: data.tipe_momen,
        potongan_rupiah: data.potongan_rupiah,
        potongan_persen: data.potongan_persen,
        poin_hargamomen: data.poin_hargamomen,
      } as any).subscribe(() => this.loadData());
    }
  }

  openAddMomenModal(): void {
    this.formMomen.set({
      nama_hargamomen: '',
      keterangan_hargamomen: '',
      awal_hargamomen: new Date().toISOString().split('T')[0],
      akhir_hargamomen: new Date().toISOString().split('T')[0],
      tipe_alokasi_hargamomen: 'All Cabang',
      aktif_hargamomen: true,
    });
    this.isAddMomenOpen.set(true);
  }

  saveHargaMomen(): void {
    const data = this.formMomen();
    if (!data.nama_hargamomen) return;

    this.service.addHargaMomen({
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargamomen: data.nama_hargamomen,
      keterangan_hargamomen: data.keterangan_hargamomen,
      awal_hargamomen: data.awal_hargamomen || new Date().toISOString().split('T')[0],
      akhir_hargamomen: data.akhir_hargamomen || new Date().toISOString().split('T')[0],
      tipe_alokasi_hargamomen: data.tipe_alokasi_hargamomen,
      aktif_hargamomen: data.aktif_hargamomen,
    }).subscribe(() => {
      this.loadData();
      this.isAddMomenOpen.set(false);
    });
  }

  deleteHargaMomen(id: number, event?: Event): void {
    if (event) event.stopPropagation();
    this.service.deleteHargaMomen(id).subscribe(() => {
      this.loadData();
      if (this.selectedHargaMomenItem()?.id === id) {
        this.selectedHargaMomenItem.set(null);
      }
    });
  }
}
