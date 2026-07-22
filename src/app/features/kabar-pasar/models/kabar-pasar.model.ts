import { Pelanggan } from '../../pelanggan/models/pelanggan.model';
import { Product } from '../../product/models/product.model';
import { ProdukKompetitor } from '../../produk-kompetitor/models/produk-kompetitor.model';
import { Province } from '../../province/models/province.model';
import { Regency } from '../../regency/models/regency.model';
import { District } from '../../district/models/district.model';
import { Village } from '../../village/models/village.model';

export interface KabarPasar {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  namaAdministrator: string;
  emailAdministrator: string;
  idUserdata: number | null;
  idProduk: number | null;
  idVendor: number | null;
  shareVendor: boolean;
  idProdukKompetitor: number | null;
  idPelanggan: number | null;
  provinceId: number | null;
  regencyId: number | null;
  districtId: number | null;
  villageId: number | null;
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
