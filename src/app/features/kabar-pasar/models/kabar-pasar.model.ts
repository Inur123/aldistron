import { Pelanggan } from '../../pelanggan/models/pelanggan.model';
import { Product } from '../../product/models/product.model';
import { ProdukKompetitor } from '../../produk-kompetitor/models/produk-kompetitor.model';
import { Province } from '../../province/models/province.model';
import { Regency } from '../../regency/models/regency.model';
import { District } from '../../district/models/district.model';
import { Village } from '../../village/models/village.model';

export interface KabarPasar {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  namaAdministrator: string;
  emailAdministrator: string;
  idUserdata: number;
  idProduk: number;
  idVendor: number;
  shareVendor: boolean;
  idProdukKompetitor: number;
  idPelanggan: number;
  provinceId: number;
  regencyId: number;
  districtId: number;
  villageId: number;
  namaPropinsi: string;
  namaKabupaten: string;
  namaKecamatan: string;
  namaDesa: string;
  kategori: string;
  gambarKabar: string;
  keterangan: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  pelanggan?: Pelanggan;               // belongsTo
  produk?: Product;                    // belongsTo
  produkkompetitor?: ProdukKompetitor; // belongsTo
  province?: Province;                 // belongsTo
  regency?: Regency;                   // belongsTo
  district?: District;                 // belongsTo
  village?: Village;                   // belongsTo
}
