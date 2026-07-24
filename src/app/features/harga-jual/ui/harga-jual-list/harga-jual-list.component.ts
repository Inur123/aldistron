import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HargaJualService, HargaJualCombined } from '../../services/harga-jual.service';
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
  DollarSign,
  ArrowLeft,
  CheckCircle2,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-harga-jual-list',
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
  templateUrl: './harga-jual-list.component.html',
})
export class HargaJualListComponent implements OnInit {
  private readonly service = inject(HargaJualService);
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
  readonly dollarIcon = DollarSign;
  readonly arrowLeftIcon = ArrowLeft;
  readonly checkCircleIcon = CheckCircle2;
  readonly xIcon = X;

  items = signal<HargaJualCombined[]>([]);
  availableProducts = signal<string[]>([]);

  // Split Panel Kiri Selection State
  selectedHargaJualItem = signal<HargaJualCombined | null>(null);
  panelMode = signal<'view' | 'edit'>('edit');

  // Spartan DatePicker config
  readonly defaultFocusedDate = DateTime.now().toJSDate();
  readonly formatDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('dd MMM yyyy');
  readonly formatInputDate = (date: Date): string => DateTime.fromJSDate(date).toFormat('yyyy-MM-dd');
  readonly parseDate = (value: string): Date | null => {
    const dt = DateTime.fromFormat(value, 'yyyy-MM-dd');
    return dt.isValid ? dt.toJSDate() : null;
  };

  // Form Panel Kiri: Header Program + Penetapan 6 Level Harga Rinci
  formPanel = signal({
    id: 0,
    nama_hargajual: '',
    keterangan_hargajual: '',
    awal_hargajual: '',
    akhir_hargajual: '',
    tipe_alokasi_hargajual: 'All Cabang',
    aktif_hargajual: true,
    // Rinci Form
    nama_produk: '',
    hargajual_het: 0,
    hargajual_retail: 0,
    hargajual_wo: 0,
    hargajual_so: 0,
    hargajual_custom: 0,
    hargajual_spesial: 0,
  });

  // Modal 1: Tambah Program Baru
  isAddJualOpen = signal(false);
  formJual = signal({
    nama_hargajual: '',
    keterangan_hargajual: '',
    awal_hargajual: '',
    akhir_hargajual: '',
    tipe_alokasi_hargajual: 'All Cabang',
    aktif_hargajual: true,
  });

  ngOnInit(): void {
    this.loadData();
    this.productService.getProducts().subscribe((prods) => {
      this.availableProducts.set(prods.map((p) => p.nama_produk));
    });
  }

  loadData(): void {
    this.service.getHargaJuals().subscribe((res) => {
      this.items.set(res);
    });
  }

  selectItemForPanel(item: HargaJualCombined, mode: 'view' | 'edit' = 'edit'): void {
    this.selectedHargaJualItem.set(item);
    this.panelMode.set(mode);

    const firstRinci = item.hargajualrincis.length > 0 ? item.hargajualrincis[0] : null;
    const prods = this.availableProducts();

    const awal = item.awal_hargajual ? DateTime.fromISO(item.awal_hargajual).toJSDate() : null;
    const akhir = item.akhir_hargajual ? DateTime.fromISO(item.akhir_hargajual).toJSDate() : null;

    this.formPanel.set({
      id: item.id,
      nama_hargajual: item.nama_hargajual,
      keterangan_hargajual: item.keterangan_hargajual,
      awal_hargajual: awal as any,
      akhir_hargajual: akhir as any,
      tipe_alokasi_hargajual: item.tipe_alokasi_hargajual,
      aktif_hargajual: item.aktif_hargajual,
      nama_produk: firstRinci?.nama_produk || (prods.length > 0 ? prods[0] : 'Laptop Gaming ROG Strix G16'),
      hargajual_het: firstRinci?.hargajual_het || 25000000,
      hargajual_retail: firstRinci?.hargajual_retail || 24500000,
      hargajual_wo: firstRinci?.hargajual_wo || 23500000,
      hargajual_so: firstRinci?.hargajual_so || 23000000,
      hargajual_custom: firstRinci?.hargajual_custom || 22500000,
      hargajual_spesial: firstRinci?.hargajual_spesial || 22000000,
    });
    this.cdr.detectChanges();
  }

  savePanelProduct(): void {
    const data = this.formPanel();
    if (!data.id) return;

    // Update Program & Rinci sekaligus
    if (data.nama_produk) {
      this.service.addHargaJualRinci(data.id, data.nama_produk, {
        id_produk: 1,
        id_unit: 1,
        hargajual_het: data.hargajual_het,
        hargajual_retail: data.hargajual_retail,
        hargajual_wo: data.hargajual_wo,
        hargajual_so: data.hargajual_so,
        hargajual_custom: data.hargajual_custom,
        hargajual_spesial: data.hargajual_spesial,
      }).subscribe(() => this.loadData());
    }
  }

  openAddJualModal(): void {
    this.formJual.set({
      nama_hargajual: '',
      keterangan_hargajual: '',
      awal_hargajual: new Date().toISOString().split('T')[0],
      akhir_hargajual: new Date().toISOString().split('T')[0],
      tipe_alokasi_hargajual: 'All Cabang',
      aktif_hargajual: true,
    });
    this.isAddJualOpen.set(true);
  }

  saveHargaJual(): void {
    const data = this.formJual();
    if (!data.nama_hargajual) return;

    this.service.addHargaJual({
      id_aoldatabase: 1,
      id_aoldb: 1,
      id_cabang: 1,
      nama_hargajual: data.nama_hargajual,
      keterangan_hargajual: data.keterangan_hargajual,
      awal_hargajual: data.awal_hargajual || new Date().toISOString().split('T')[0],
      akhir_hargajual: data.akhir_hargajual || new Date().toISOString().split('T')[0],
      tipe_alokasi_hargajual: data.tipe_alokasi_hargajual,
      aktif_hargajual: data.aktif_hargajual,
    }).subscribe((res) => {
      this.loadData();
      this.isAddJualOpen.set(false);
    });
  }

  deleteHargaJual(id: number, event?: Event): void {
    if (event) event.stopPropagation();
    this.service.deleteHargaJual(id).subscribe(() => {
      this.loadData();
      if (this.selectedHargaJualItem()?.id === id) {
        this.selectedHargaJualItem.set(null);
      }
    });
  }
}
