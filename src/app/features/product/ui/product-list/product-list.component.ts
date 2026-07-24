import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductFacade } from '../../facades/product.facade';
import { ProdukBrandFacade } from '../../../produk-brand/facades/produk-brand.facade';
import { ProdukKategoriFacade } from '../../../produk-kategori/facades/produk-kategori.facade';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmComboboxImports } from '@spartan-ng/helm/combobox';
import { BrnComboboxImports } from '@spartan-ng/brain/combobox';
import { BrnPopoverImports } from '@spartan-ng/brain/popover';
import {
  LucideAngularModule,
  RefreshCw,
  Package,
  Eye,
  Pencil,
  Trash2,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Plus,
  ArrowLeft,
  CheckCircle2,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    HlmTabsImports,
    HlmInputImports,
    HlmComboboxImports,
    BrnComboboxImports,
    BrnPopoverImports,
    LucideAngularModule,
  ],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  readonly facade = inject(ProductFacade);
  readonly brandFacade = inject(ProdukBrandFacade);
  readonly kategoriFacade = inject(ProdukKategoriFacade);

  readonly refreshIcon = RefreshCw;
  readonly packageIcon = Package;
  readonly eyeIcon = Eye;
  readonly pencilIcon = Pencil;
  readonly trashIcon = Trash2;
  readonly arrowUpDownIcon = ArrowUpDown;
  readonly chevronLeftIcon = ChevronLeft;
  readonly chevronRightIcon = ChevronRight;
  readonly searchIcon = Search;
  readonly plusIcon = Plus;
  readonly arrowLeftIcon = ArrowLeft;
  readonly checkCircleIcon = CheckCircle2;
  readonly xIcon = X;

  isAddModalOpen = signal(false);
  selectedProductForPanel = signal<any | null>(null);
  panelMode = signal<'view' | 'edit'>('edit');

  // Form untuk Tambah Produk Cepat
  formProduct = signal({
    namaProduk: '',
    nomorProduk: '',
    namaVendorProduk: '',
    namaBrandProduk: '',
    namaKategoriProduk: '',
  });

  // Form Panel Kiri untuk Edit/Rinci Spesifikasi Produk
  detailProduct = signal({
    id: 0,
    namaProduk: '',
    nomorProduk: '',
    barcodeProduk: '',
    namaVendorProduk: '',
    namaBrandProduk: '',
    namaKategoriProduk: '',
    jenisProduk: 'Barang',
    keteranganProduk: '',
    gramasiProduk: 0,
    konversiUnit1: 1,
    konversiUnit2: 0,
    minimBeliUnit1: 1,
    minimStokUnit1: 5,
    panjangProdukKecil: 0,
    lebarProdukKecil: 0,
    tinggiProdukKecil: 0,
    panjangProdukBesar: 0,
    lebarProdukBesar: 0,
    tinggiProdukBesar: 0,
  });

  ngOnInit(): void {
    this.facade.loadProducts();
    this.brandFacade.loadBrands();
    this.kategoriFacade.loadCategories();
  }

  openAddModal(): void {
    const brands = this.brandFacade.brands();
    const categories = this.kategoriFacade.categories();

    this.formProduct.set({
      namaProduk: '',
      nomorProduk: 'PRD-' + Math.floor(100 + Math.random() * 900),
      namaVendorProduk: 'PT Asus Indonesia',
      namaBrandProduk: brands.length > 0 ? brands[0].namaBrand : 'ROG',
      namaKategoriProduk: categories.length > 0 ? categories[0].namaKategori : 'Laptop & Komputer',
    });
    this.isAddModalOpen.set(true);
  }

  saveProduct(): void {
    const data = this.formProduct();
    if (!data.namaProduk) return;

    const newProd = {
      id: Date.now(),
      namaProduk: data.namaProduk,
      nomorProduk: data.nomorProduk || 'PRD-' + Math.floor(100 + Math.random() * 900),
      barcodeProduk: '899' + Math.floor(100000000 + Math.random() * 900000000),
      namaVendorProduk: data.namaVendorProduk || 'PT Asus Indonesia',
      namaBrandProduk: data.namaBrandProduk || 'ROG',
      namaKategoriProduk: data.namaKategoriProduk || 'Laptop & Komputer',
      jenisProduk: 'Barang',
      gramasiProduk: 500,
    };

    this.facade.addProduct(newProd as any);
    this.selectProductForPanel(newProd, 'edit');
    this.isAddModalOpen.set(false);
  }

  selectProductForPanel(prod: any, mode: 'view' | 'edit' = 'edit'): void {
    this.selectedProductForPanel.set(prod);
    this.panelMode.set(mode);

    const brands = this.brandFacade.brands();
    const categories = this.kategoriFacade.categories();

    const matchedBrand = brands.find((b) => b.id === prod.idProdukbrand || b.namaBrand.toLowerCase() === (prod.namaBrandProduk || '').toLowerCase());
    const matchedCategory = categories.find((c) => c.id === prod.idProdukkategori || c.namaKategori.toLowerCase() === (prod.namaKategoriProduk || '').toLowerCase());

    this.detailProduct.set({
      id: prod.id,
      namaProduk: prod.namaProduk,
      nomorProduk: prod.nomorProduk || '-',
      barcodeProduk: prod.barcodeProduk || '899123456789',
      namaVendorProduk: prod.namaVendorProduk || 'PT Distributor Utama',
      namaBrandProduk: matchedBrand ? matchedBrand.namaBrand : (prod.namaBrandProduk || (brands.length > 0 ? brands[0].namaBrand : 'ROG')),
      namaKategoriProduk: matchedCategory ? matchedCategory.namaKategori : (prod.namaKategoriProduk || (categories.length > 0 ? categories[0].namaKategori : 'Laptop & Komputer')),
      jenisProduk: prod.jenisProduk || 'Barang',
      keteranganProduk: prod.keteranganProduk || 'Deskripsi spesifikasi produk',
      gramasiProduk: prod.gramasiProduk || 500,
      konversiUnit1: prod.konversiUnit1 || 1,
      konversiUnit2: prod.konversiUnit2 || 0,
      minimBeliUnit1: prod.minimBeliUnit1 || 1,
      minimStokUnit1: prod.minimStokUnit1 || 5,
      panjangProdukKecil: prod.panjangProdukKecil || 10,
      lebarProdukKecil: prod.lebarProdukKecil || 10,
      tinggiProdukKecil: prod.tinggiProdukKecil || 5,
      panjangProdukBesar: prod.panjangProdukBesar || 30,
      lebarProdukBesar: prod.lebarProdukBesar || 20,
      tinggiProdukBesar: prod.tinggiProdukBesar || 15,
    });
  }

  savePanelProduct(): void {
    const data = this.detailProduct();
    if (!data.id) return;

    this.facade.updateProduct({
      id: data.id,
      namaProduk: data.namaProduk,
      nomorProduk: data.nomorProduk,
      barcodeProduk: data.barcodeProduk,
      namaVendorProduk: data.namaVendorProduk,
      namaBrandProduk: data.namaBrandProduk,
      namaKategoriProduk: data.namaKategoriProduk,
      jenisProduk: data.jenisProduk,
      keteranganProduk: data.keteranganProduk,
      gramasiProduk: data.gramasiProduk,
      konversiUnit1: data.konversiUnit1,
      konversiUnit2: data.konversiUnit2,
      minimBeliUnit1: data.minimBeliUnit1,
      minimStokUnit1: data.minimStokUnit1,
      panjangProdukKecil: data.panjangProdukKecil,
      lebarProdukKecil: data.lebarProdukKecil,
      tinggiProdukKecil: data.tinggiProdukKecil,
      panjangProdukBesar: data.panjangProdukBesar,
      lebarProdukBesar: data.lebarProdukBesar,
      tinggiProdukBesar: data.tinggiProdukBesar,
    } as any);
  }

  deleteProduct(id: number, event?: Event): void {
    if (event) event.stopPropagation();
    this.facade.deleteProduct(id);
    if (this.selectedProductForPanel()?.id === id) {
      const prods = this.facade.products();
      if (prods.length > 0) {
        this.selectProductForPanel(prods[0]);
      } else {
        this.selectedProductForPanel.set(null);
      }
    }
  }
}
