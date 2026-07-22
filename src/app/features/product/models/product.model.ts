import { ProdukBrand } from '../../produk-brand/models/produk-brand.model';
import { ProdukKategori } from '../../produk-kategori/models/produk-kategori.model';
import { Vendor } from '../../vendor/models/vendor.model';
import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface Product {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idVendor: number | null;
  idProdukbrand: number | null;
  idProdukkategori: number | null;
  idAolprod: number | null;
  namaVendorProduk: string;
  namaBrandProduk: string;
  namaKategoriProduk: string;
  nomorProduk: string;
  namaProduk: string;
  jenisProduk: string;
  barcodeProduk: string;
  keteranganProduk: string;
  aktifProduk: boolean;
  konversiUnit1: number | null;
  konversiUnit2: number | null;
  konversiUnit3: number | null;
  konversiUnit4: number | null;
  konversiUnit5: number | null;
  rasioUnit1: number | null;
  rasioUnit2: number | null;
  rasioUnit3: number | null;
  rasioUnit4: number | null;
  rasioUnit5: number | null;
  gramasiProduk: number | null;
  panjangProdukKecil: number | null;
  lebarProdukKecil: number | null;
  tinggiProdukKecil: number | null;
  panjangProdukBesar: number | null;
  lebarProdukBesar: number | null;
  tinggiProdukBesar: number | null;
  gambarProduk: string;
  minimBeliUnit1: number | null;
  minimStokUnit1: number | null;
  logAolcatId: number | null;
  logAolvenId: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  vendor?: Vendor;                 // belongsTo
  produkbrand?: ProdukBrand;       // belongsTo
  produkkategori?: ProdukKategori; // belongsTo
  aoldatabase?: AolDatabase;       // belongsTo
}
