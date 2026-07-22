import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { JangkaPiutang } from '../../jangka-piutang/models/jangka-piutang.model';
import { VendorKategori } from '../../vendor-kategori/models/vendor-kategori.model';
import { VendorRinci } from '../../vendor-rinci/models/vendor-rinci.model';
import { ProdukBrand } from '../../produk-brand/models/produk-brand.model';

export interface Vendor {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idAolven: number | null;
  idJangkapiutang: number | null;
  idVendorkategori: number | null;
  nomorVendor: string;
  namaVendor: string;
  keteranganVendor: string;
  logAolcatId: number | null;
  logAolbranchId: number | null;
  logAoltermId: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi Modular RAPIDATA ────────────────────────────────
  aoldatabase?: AolDatabase;            // belongsTo
  jangkapiutang?: JangkaPiutang;        // belongsTo
  vendorkategori?: VendorKategori;      // belongsTo
  vendorrinci?: VendorRinci;            // hasOne (1→1)
  produkbrands?: ProdukBrand[];         // hasMany (1→N)
}
