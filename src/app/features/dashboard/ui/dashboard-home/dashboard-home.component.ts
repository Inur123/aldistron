import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  LucideAngularModule, 
  Package, 
  Tag, 
  Bookmark, 
  Swords, 
  Ruler, 
  Warehouse, 
  Map, 
  Building2, 
  Building, 
  Home, 
  Users, 
  FileText, 
  UserCheck, 
  Gift, 
  Send, 
  Store, 
  FolderKanban, 
  DollarSign, 
  Percent, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ShoppingCart, 
  CreditCard, 
  Coins, 
  Clock, 
  Truck, 
  TrendingDown, 
  BarChart3, 
  Receipt, 
  Landmark, 
  User, 
  Database, 
  Key, 
  Lock, 
  Settings,
  ArrowRight
} from 'lucide-angular';

interface ModuleItem {
  name: string;
  route: string;
  icon: any;
  desc: string;
}

interface FeatureGroup {
  category: string;
  modules: ModuleItem[];
}

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans">
      <!-- Header -->
      <header class="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <span class="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-semibold uppercase tracking-wider">
              ALDISTRON ERP PLATFORM
            </span>
            <span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-semibold">
              87 Modules Active
            </span>
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Navigation Dashboard
          </h1>
          <p class="text-slate-400 mt-1 text-sm md:text-base">
            Pusat kendali modul data RAPIDATA Architecture. Pilih modul untuk melihat antarmuka dan pengelolaan data.
          </p>
        </div>
      </header>

      <!-- Search & Grid Content -->
      <main class="max-w-7xl mx-auto space-y-10">
        @for (group of featureGroups; track group.category) {
          <section>
            <h2 class="text-lg font-bold text-slate-300 mb-4 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              {{ group.category }}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              @for (mod of group.modules; track mod.route) {
                <a [routerLink]="'/' + mod.route"
                   class="group relative bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between">
                  <div>
                    <div class="w-10 h-10 rounded-xl bg-slate-800 group-hover:bg-indigo-600/20 text-slate-400 group-hover:text-indigo-400 flex items-center justify-center mb-3 transition-colors">
                      <lucide-angular [img]="mod.icon" class="w-5 h-5"></lucide-angular>
                    </div>
                    <h3 class="font-semibold text-slate-200 group-hover:text-white text-base mb-1">
                      {{ mod.name }}
                    </h3>
                    <p class="text-xs text-slate-400 line-clamp-2">
                      {{ mod.desc }}
                    </p>
                  </div>
                  <div class="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 group-hover:text-indigo-400 font-medium">
                    <span>Buka Modul</span>
                    <lucide-angular [img]="arrowRightIcon" class="w-4 h-4"></lucide-angular>
                  </div>
                </a>
              }
            </div>
          </section>
        }
      </main>
    </div>
  `
})
export class DashboardHomeComponent {
  readonly arrowRightIcon = ArrowRight;

  readonly featureGroups: FeatureGroup[] = [
    {
      category: 'Master Data & Produk',
      modules: [
        { name: 'Produk', route: 'products', icon: Package, desc: 'Kelola katalog produk, stok & harga' },
        { name: 'Kategori Produk', route: 'produk-kategori', icon: Tag, desc: 'Klasifikasi hirarki kategori produk' },
        { name: 'Brand Produk', route: 'produk-brands', icon: Bookmark, desc: 'Manajemen merk & pabrikan' },
        { name: 'Produk Kompetitor', route: 'produk-kompetitors', icon: Swords, desc: 'Monitoring barang pasaran saingan' },
        { name: 'Unit / Satuan', route: 'unit', icon: Ruler, desc: 'Master satuan unit barang' },
        { name: 'Gudang / Warehouse', route: 'gudang', icon: Warehouse, desc: 'Master lokasi tempat penyimpanan' },
      ]
    },
    {
      category: 'Modul Wilayah (Regional Standard)',
      modules: [
        { name: 'Province (Provinsi)', route: 'province', icon: Map, desc: 'Master tingkat Provinsi' },
        { name: 'Regency (Kabupaten/Kota)', route: 'regency', icon: Building2, desc: 'Master tingkat Kabupaten' },
        { name: 'District (Kecamatan)', route: 'district', icon: Building, desc: 'Master tingkat Kecamatan' },
        { name: 'Village (Desa/Kelurahan)', route: 'village', icon: Home, desc: 'Master tingkat Desa' },
      ]
    },
    {
      category: 'Pelanggan & Stakeholder',
      modules: [
        { name: 'Pelanggan', route: 'pelanggans', icon: Users, desc: 'Database pelanggan utama' },
        { name: 'Pelanggan Rinci', route: 'pelanggan-rincis', icon: FileText, desc: 'Detail profil & legalitas' },
        { name: 'Kategori Pelanggan', route: 'pelanggan-kategoris', icon: Tag, desc: 'Segmentasi tipe customer' },
        { name: 'Personal Pelanggan', route: 'pelanggan-personals', icon: UserCheck, desc: 'Kontak PIC personal' },
        { name: 'Poin Pelanggan', route: 'pelanggan-poins', icon: Gift, desc: 'Loyalty point & reward' },
        { name: 'Pelanggan Request', route: 'pelanggan-requests', icon: Send, desc: 'Pengajuan data NOO baru' },
      ]
    },
    {
      category: 'Vendor & Suplier',
      modules: [
        { name: 'Vendor', route: 'vendors', icon: Store, desc: 'Master pemasok & mitra suplier' },
        { name: 'Kategori Vendor', route: 'vendor-kategoris', icon: FolderKanban, desc: 'Pengelompokan jenis vendor' },
        { name: 'Vendor Rinci', route: 'vendor-rincis', icon: FileText, desc: 'Rincian data legalitas vendor' },
      ]
    },
    {
      category: 'Penjualan, Harga & Promosi',
      modules: [
        { name: 'Harga Jual', route: 'harga-jual', icon: DollarSign, desc: 'Manajemen skema harga jual' },
        { name: 'Harga Diskon', route: 'harga-diskon', icon: Percent, desc: 'Aturan potongan harga' },
        { name: 'Harga Promo', route: 'harga-promo', icon: Sparkles, desc: 'Program promo & bonus barang' },
        { name: 'Harga Paket', route: 'harga-paket', icon: Gift, desc: 'Bundling paket penjualan' },
        { name: 'Harga Momen', route: 'harga-momen', icon: Calendar, desc: 'Potongan harga musiman/momen' },
      ]
    },
    {
      category: 'Kunjungan Field & Sales',
      modules: [
        { name: 'Kunjungan Sales', route: 'kunjungan', icon: MapPin, desc: 'Sistem Kunjungan Lapangan' },
        { name: 'Kunjungan Penjualan', route: 'kunjungan-jual', icon: ShoppingCart, desc: 'Transaksi Taking Order' },
        { name: 'Kunjungan Penagihan', route: 'kunjungan-tagih', icon: CreditCard, desc: 'Penagihan piutang toko' },
        { name: 'Setoran Sales', route: 'kunjungan-setor', icon: Coins, desc: 'Rincian fisik uang setoran' },
        { name: 'Rute Kunjung', route: 'rute-kunjung', icon: Map, desc: 'Master jadwal rute sales' },
        { name: 'Absen Masuk', route: 'absen-masuk', icon: Clock, desc: 'Absensi geolokasi sales' },
      ]
    },
    {
      category: 'Pengiriman & Armada Logistik',
      modules: [
        { name: 'Pengiriman', route: 'pengiriman', icon: Truck, desc: 'Surat jalan & pengiriman' },
        { name: 'Armada Kendaraan', route: 'armada', icon: Truck, desc: 'Master truk & kendaraan' },
      ]
    },
    {
      category: 'Keuangan & Piutang',
      modules: [
        { name: 'Piutang Aktual', route: 'piutang-aktual', icon: TrendingDown, desc: 'Monitoring piutang realtime' },
        { name: 'Plafon Piutang', route: 'piutang-plafon', icon: BarChart3, desc: 'Limit kredit piutang' },
        { name: 'Klaim Biaya', route: 'klaim-biaya', icon: Receipt, desc: 'Reimbursement biaya operasional' },
        { name: 'Bank', route: 'bank', icon: Landmark, desc: 'Master akun rekening bank' },
      ]
    },
    {
      category: 'Pengaturan & System Control',
      modules: [
        { name: 'User Data', route: 'userdata', icon: User, desc: 'Database pengguna & karyawan' },
        { name: 'AOL Database', route: 'aol-database', icon: Database, desc: 'Konektor database Accurate' },
        { name: 'AOL Token', route: 'aol-token', icon: Key, desc: 'Token OAuth Accurate Online' },
        { name: 'Keycode Verification', route: 'keycode', icon: Lock, desc: 'Otorisasi kunci lisensi' },
        { name: 'Pengaturan System', route: 'pengaturan', icon: Settings, desc: 'Konfigurasi aplikasi' },
      ]
    }
  ];
}
