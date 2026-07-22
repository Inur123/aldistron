import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './features/dashboard/ui/dashboard-home/dashboard-home.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./features/product/product.routes').then(m => m.PRODUCT_ROUTES)
  },
  {
    path: 'produk-brands',
    loadChildren: () => import('./features/produk-brand/produk-brand.routes').then(m => m.PRODUK_BRAND_ROUTES)
  },
  {
    path: 'produk-kategori',
    loadChildren: () => import('./features/produk-kategori/produk-kategori.routes').then(m => m.PRODUK_KATEGORI_ROUTES)
  },
  {
    path: 'aol-databases',
    loadChildren: () => import('./features/aol-database/aol-database.routes').then(m => m.AOL_DATABASE_ROUTES)
  },
  {
    path: 'verifikasi',
    loadChildren: () => import('./features/verifikasi/verifikasi.routes').then(m => m.VERIFIKASI_ROUTES)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./features/pengaturan/pengaturan.routes').then(m => m.PENGATURAN_ROUTES)
  },
  {
    path: 'vendors',
    loadChildren: () => import('./features/vendor/vendor.routes').then(m => m.VENDOR_ROUTES)
  },
  {
    path: 'vendor-kategori',
    loadChildren: () => import('./features/vendor-kategori/vendor-kategori.routes').then(m => m.VENDOR_KATEGORI_ROUTES)
  },
  {
    path: 'vendor-rinci',
    loadChildren: () => import('./features/vendor-rinci/vendor-rinci.routes').then(m => m.VENDOR_RINCI_ROUTES)
  },
  {
    path: 'cabang',
    loadChildren: () => import('./features/cabang/cabang.routes').then(m => m.CABANG_ROUTES)
  },
  {
    path: 'jangka-piutang',
    loadChildren: () => import('./features/jangka-piutang/jangka-piutang.routes').then(m => m.JANGKA_PIUTANG_ROUTES)
  },
  {
    path: 'pelanggan',
    loadChildren: () => import('./features/pelanggan/pelanggan.routes').then(m => m.PELANGGAN_ROUTES)
  },
  {
    path: 'pelanggan-poin',
    loadChildren: () => import('./features/pelanggan-poin/pelanggan-poin.routes').then(m => m.PELANGGAN_POIN_ROUTES)
  },
  {
    path: 'pelanggan-request',
    loadChildren: () => import('./features/pelanggan-request/pelanggan-request.routes').then(m => m.PELANGGAN_REQUEST_ROUTES)
  },
  {
    path: 'pelanggan-rinci',
    loadChildren: () => import('./features/pelanggan-rinci/pelanggan-rinci.routes').then(m => m.PELANGGAN_RINCI_ROUTES)
  },
  {
    path: 'produk-kompetitor',
    loadChildren: () => import('./features/produk-kompetitor/produk-kompetitor.routes').then(m => m.PRODUK_KOMPETITOR_ROUTES)
  },
  {
    path: 'verifikasi-rinci',
    loadChildren: () => import('./features/verifikasi-rinci/verifikasi-rinci.routes').then(m => m.VERIFIKASI_RINCI_ROUTES)
  },
  {
    path: 'pelanggan-kategori',
    loadChildren: () => import('./features/pelanggan-kategori/pelanggan-kategori.routes').then(m => m.PELANGGAN_KATEGORI_ROUTES)
  },
  {
    path: 'pelanggan-personal',
    loadChildren: () => import('./features/pelanggan-personal/pelanggan-personal.routes').then(m => m.PELANGGAN_PERSONAL_ROUTES)
  },
  {
    path: 'aol-gl-akun',
    loadChildren: () => import('./features/aol-gl-akun/aol-gl-akun.routes').then(m => m.AOL_GL_AKUN_ROUTES)
  },
  {
    path: 'aol-session',
    loadChildren: () => import('./features/aol-session/aol-session.routes').then(m => m.AOL_SESSION_ROUTES)
  },
  {
    path: 'aol-tax',
    loadChildren: () => import('./features/aol-tax/aol-tax.routes').then(m => m.AOL_TAX_ROUTES)
  },
  {
    path: 'aol-token',
    loadChildren: () => import('./features/aol-token/aol-token.routes').then(m => m.AOL_TOKEN_ROUTES)
  },
  {
    path: 'api-aol',
    loadChildren: () => import('./features/api-aol/api-aol.routes').then(m => m.API_AOL_ROUTES)
  },
  {
    path: 'armada',
    loadChildren: () => import('./features/armada/armada.routes').then(m => m.ARMADA_ROUTES)
  },
  {
    path: 'armada-rinci',
    loadChildren: () => import('./features/armada-rinci/armada-rinci.routes').then(m => m.ARMADA_RINCI_ROUTES)
  },
  {
    path: 'pengiriman',
    loadChildren: () => import('./features/pengiriman/pengiriman.routes').then(m => m.PENGIRIMAN_ROUTES)
  },
  {
    path: 'pengiriman-rinci-barang',
    loadChildren: () => import('./features/pengiriman-rinci-barang/pengiriman-rinci-barang.routes').then(m => m.PENGIRIMAN_RINCI_BARANG_ROUTES)
  },
  {
    path: 'piutang-aktual',
    loadChildren: () => import('./features/piutang-aktual/piutang-aktual.routes').then(m => m.PIUTANG_AKTUAL_ROUTES)
  },
  {
    path: 'piutang-momen',
    loadChildren: () => import('./features/piutang-momen/piutang-momen.routes').then(m => m.PIUTANG_MOMEN_ROUTES)
  },
  {
    path: 'piutang-plafon',
    loadChildren: () => import('./features/piutang-plafon/piutang-plafon.routes').then(m => m.PIUTANG_PLAFON_ROUTES)
  },
  {
    path: 'plafon-biaya',
    loadChildren: () => import('./features/plafon-biaya/plafon-biaya.routes').then(m => m.PLAFON_BIAYA_ROUTES)
  },
  {
    path: 'bank',
    loadChildren: () => import('./features/bank/bank.routes').then(m => m.BANK_ROUTES)
  },
  {
    path: 'province',
    loadChildren: () => import('./features/province/province.routes').then(m => m.PROVINCE_ROUTES)
  },
  {
    path: 'regency',
    loadChildren: () => import('./features/regency/regency.routes').then(m => m.REGENCY_ROUTES)
  },
  {
    path: 'district',
    loadChildren: () => import('./features/district/district.routes').then(m => m.DISTRICT_ROUTES)
  },
  {
    path: 'village',
    loadChildren: () => import('./features/village/village.routes').then(m => m.VILLAGE_ROUTES)
  },
  {
    path: 'dropdown-custom',
    loadChildren: () => import('./features/dropdown-custom/dropdown-custom.routes').then(m => m.DROPDOWN_CUSTOM_ROUTES)
  },
  {
    path: 'dropdown-list',
    loadChildren: () => import('./features/dropdown-list/dropdown-list.routes').then(m => m.DROPDOWN_LIST_ROUTES)
  },
  {
    path: 'evenkalender',
    loadChildren: () => import('./features/evenkalender/evenkalender.routes').then(m => m.EVENKALENDER_ROUTES)
  },
  {
    path: 'evenkalender-rinci',
    loadChildren: () => import('./features/evenkalender-rinci/evenkalender-rinci.routes').then(m => m.EVENKALENDER_RINCI_ROUTES)
  },
  {
    path: 'gudang',
    loadChildren: () => import('./features/gudang/gudang.routes').then(m => m.GUDANG_ROUTES)
  },
  {
    path: 'harga-diskon',
    loadChildren: () => import('./features/harga-diskon/harga-diskon.routes').then(m => m.HARGA_DISKON_ROUTES)
  },
  {
    path: 'harga-diskon-produk',
    loadChildren: () => import('./features/harga-diskon-produk/harga-diskon-produk.routes').then(m => m.HARGA_DISKON_PRODUK_ROUTES)
  },
  {
    path: 'harga-diskon-rinci',
    loadChildren: () => import('./features/harga-diskon-rinci/harga-diskon-rinci.routes').then(m => m.HARGA_DISKON_RINCI_ROUTES)
  },
  {
    path: 'harga-jual',
    loadChildren: () => import('./features/harga-jual/harga-jual.routes').then(m => m.HARGA_JUAL_ROUTES)
  },
  {
    path: 'harga-jual-rinci',
    loadChildren: () => import('./features/harga-jual-rinci/harga-jual-rinci.routes').then(m => m.HARGA_JUAL_RINCI_ROUTES)
  },
  {
    path: 'harga-momen',
    loadChildren: () => import('./features/harga-momen/harga-momen.routes').then(m => m.HARGA_MOMEN_ROUTES)
  },
  {
    path: 'harga-momen-rinci',
    loadChildren: () => import('./features/harga-momen-rinci/harga-momen-rinci.routes').then(m => m.HARGA_MOMEN_RINCI_ROUTES)
  },
  {
    path: 'harga-paket',
    loadChildren: () => import('./features/harga-paket/harga-paket.routes').then(m => m.HARGA_PAKET_ROUTES)
  },
  {
    path: 'harga-paket-rinci',
    loadChildren: () => import('./features/harga-paket-rinci/harga-paket-rinci.routes').then(m => m.HARGA_PAKET_RINCI_ROUTES)
  },
  {
    path: 'harga-promo',
    loadChildren: () => import('./features/harga-promo/harga-promo.routes').then(m => m.HARGA_PROMO_ROUTES)
  },
  {
    path: 'harga-promo-produk',
    loadChildren: () => import('./features/harga-promo-produk/harga-promo-produk.routes').then(m => m.HARGA_PROMO_PRODUK_ROUTES)
  },
  {
    path: 'harga-promo-rinci',
    loadChildren: () => import('./features/harga-promo-rinci/harga-promo-rinci.routes').then(m => m.HARGA_PROMO_RINCI_ROUTES)
  },
  {
    path: 'unit',
    loadChildren: () => import('./features/unit/unit.routes').then(m => m.UNIT_ROUTES)
  },
  {
    path: 'hari-kerja',
    loadChildren: () => import('./features/hari-kerja/hari-kerja.routes').then(m => m.HARI_KERJA_ROUTES)
  },
  {
    path: 'historystok',
    loadChildren: () => import('./features/historystok/historystok.routes').then(m => m.HISTORYSTOK_ROUTES)
  },
  {
    path: 'historystok-rinci',
    loadChildren: () => import('./features/historystok-rinci/historystok-rinci.routes').then(m => m.HISTORYSTOK_RINCI_ROUTES)
  },
  {
    path: 'http-status',
    loadChildren: () => import('./features/http-status/http-status.routes').then(m => m.HTTP_STATUS_ROUTES)
  },
  {
    path: 'info-global',
    loadChildren: () => import('./features/info-global/info-global.routes').then(m => m.INFO_GLOBAL_ROUTES)
  },
  {
    path: 'info-khusus',
    loadChildren: () => import('./features/info-khusus/info-khusus.routes').then(m => m.INFO_KHUSUS_ROUTES)
  },
  {
    path: 'kabar-pasar',
    loadChildren: () => import('./features/kabar-pasar/kabar-pasar.routes').then(m => m.KABAR_PASAR_ROUTES)
  },
  {
    path: 'kabarpasarchat',
    loadChildren: () => import('./features/kabarpasarchat/kabarpasarchat.routes').then(m => m.KABARPASARCHAT_ROUTES)
  },
  {
    path: 'keycode',
    loadChildren: () => import('./features/keycode/keycode.routes').then(m => m.KEYCODE_ROUTES)
  },
  {
    path: 'klaim-biaya',
    loadChildren: () => import('./features/klaim-biaya/klaim-biaya.routes').then(m => m.KLAIM_BIAYA_ROUTES)
  },
  {
    path: 'klaim-biaya-rinci',
    loadChildren: () => import('./features/klaim-biaya-rinci/klaim-biaya-rinci.routes').then(m => m.KLAIM_BIAYA_RINCI_ROUTES)
  },
  {
    path: 'kunjungan',
    loadChildren: () => import('./features/kunjungan/kunjungan.routes').then(m => m.KUNJUNGAN_ROUTES)
  },
  {
    path: 'kunjungan-jual',
    loadChildren: () => import('./features/kunjungan-jual/kunjungan-jual.routes').then(m => m.KUNJUNGAN_JUAL_ROUTES)
  },
  {
    path: 'kunjungan-jual-rinci',
    loadChildren: () => import('./features/kunjungan-jual-rinci/kunjungan-jual-rinci.routes').then(m => m.KUNJUNGAN_JUAL_RINCI_ROUTES)
  },
  {
    path: 'kunjungan-setor',
    loadChildren: () => import('./features/kunjungan-setor/kunjungan-setor.routes').then(m => m.KUNJUNGAN_SETOR_ROUTES)
  },
  {
    path: 'kunjungan-tagih',
    loadChildren: () => import('./features/kunjungan-tagih/kunjungan-tagih.routes').then(m => m.KUNJUNGAN_TAGIH_ROUTES)
  },
  {
    path: 'kunjungan-tagih-no-rute',
    loadChildren: () => import('./features/kunjungan-tagih-no-rute/kunjungan-tagih-no-rute.routes').then(m => m.KUNJUNGAN_TAGIH_NO_RUTE_ROUTES)
  },
  {
    path: 'kunjungan-tagih-rinci',
    loadChildren: () => import('./features/kunjungan-tagih-rinci/kunjungan-tagih-rinci.routes').then(m => m.KUNJUNGAN_TAGIH_RINCI_ROUTES)
  },
  {
    path: 'otp',
    loadChildren: () => import('./features/otp/otp.routes').then(m => m.OTP_ROUTES)
  },
  {
    path: 'pengiriman-rinci',
    loadChildren: () => import('./features/pengiriman-rinci/pengiriman-rinci.routes').then(m => m.PENGIRIMAN_RINCI_ROUTES)
  },
  {
    path: 'absen-masuk',
    loadChildren: () => import('./features/absen-masuk/absen-masuk.routes').then(m => m.ABSEN_MASUK_ROUTES)
  },
  {
    path: 'rute-kunjung',
    loadChildren: () => import('./features/rute-kunjung/rute-kunjung.routes').then(m => m.RUTE_KUNJUNG_ROUTES)
  },
  {
    path: 'rute-kunjung-rinci',
    loadChildren: () => import('./features/rute-kunjung-rinci/rute-kunjung-rinci.routes').then(m => m.RUTE_KUNJUNG_RINCI_ROUTES)
  },
  {
    path: 'site-log',
    loadChildren: () => import('./features/site-log/site-log.routes').then(m => m.SITE_LOG_ROUTES)
  },
  {
    path: 'sysadmin',
    loadChildren: () => import('./features/sysadmin/sysadmin.routes').then(m => m.SYSADMIN_ROUTES)
  },
  {
    path: 'token',
    loadChildren: () => import('./features/token/token.routes').then(m => m.TOKEN_ROUTES)
  },
  {
    path: 'upload-file',
    loadChildren: () => import('./features/upload-file/upload-file.routes').then(m => m.UPLOAD_FILE_ROUTES)
  },
  {
    path: 'useradmin',
    loadChildren: () => import('./features/useradmin/useradmin.routes').then(m => m.USERADMIN_ROUTES)
  },
  {
    path: 'userdata',
    loadChildren: () => import('./features/userdata/userdata.routes').then(m => m.USERDATA_ROUTES)
  },
  {
    path: 'userdata-rinci',
    loadChildren: () => import('./features/userdata-rinci/userdata-rinci.routes').then(m => m.USERDATA_RINCI_ROUTES)
  },
  {
    path: 'userdata-target',
    loadChildren: () => import('./features/userdata-target/userdata-target.routes').then(m => m.USERDATA_TARGET_ROUTES)
  },
  {
    path: 'userdata-target-rinci',
    loadChildren: () => import('./features/userdata-target-rinci/userdata-target-rinci.routes').then(m => m.USERDATA_TARGET_RINCI_ROUTES)
  }
];



