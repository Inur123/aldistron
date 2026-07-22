import { KunjunganJual } from '../../kunjungan-jual/models/kunjungan-jual.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface KunjunganJualRinci {
  id: number;
  idKunjunganjual: number;
  idProdukKunjunganjual: number;
  nomorProdukKunjunganjual: string;
  namaProdukKunjunganjual: string;
  qtyProdukKunjunganjual: number;
  idUnitKunjunganjual: number;
  namaUnitKunjunganjual: string;
  hargaUnitKunjunganjual: number;
  diskonUnitKunjunganjual: number;
  hargaProdukKunjunganjual: number;
  diskonProdukKunjunganjual: number;
  totalhargaKunjunganjual: number;
  keteranganTransaksi: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  kunjunganjual?: KunjunganJual; // belongsTo
  produk?: Product;               // belongsTo
  unit?: Unit;                   // belongsTo
}
