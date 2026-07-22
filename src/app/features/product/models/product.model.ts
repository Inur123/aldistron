import { ProdukBrand } from '../../produk-brand/models/produk-brand.model';
import { ProdukKategori } from '../../produk-kategori/models/produk-kategori.model';
import { Vendor } from '../../vendor/models/vendor.model';
import { AolDatabase } from '../../aol-database/models/aol-database.model';


export interface Product {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idVendor: number;
  idProdukbrand: number;
  idProdukkategori: number;
  idAolprod: number;
  namaVendorProduk: string;
  namaBrandProduk: string;
  namaKategoriProduk: string;
  nomorProduk: string;
  namaProduk: string;
  jenisProduk: string;
  barcodeProduk: string;
  keteranganProduk: string;
  aktifProduk: boolean;
  konversiUnit1: number;
  konversiUnit2: number;
  konversiUnit3: number;
  konversiUnit4: number;
  konversiUnit5: number;
  rasioUnit1: number;
  rasioUnit2: number;
  rasioUnit3: number;
  rasioUnit4: number;
  rasioUnit5: number;
  gramasiProduk: number;
  panjangProdukKecil: number;
  lebarProdukKecil: number;
  tinggiProdukKecil: number;
  panjangProdukBesar: number;
  lebarProdukBesar: number;
  tinggiProdukBesar: number;
  gambarProduk: string;
  minimBeliUnit1: number;
  minimStokUnit1: number;
  logAolcatId: number;
  logAolvenId: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi Modular ──────────────────────────────────────────
  brand?: ProdukBrand;
  kategori?: ProdukKategori;
  vendor?: Vendor;
  aoldatabase?: AolDatabase;
}
