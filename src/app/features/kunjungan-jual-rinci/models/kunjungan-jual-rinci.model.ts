import { KunjunganJual } from '../../kunjungan-jual/models/kunjungan-jual.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface KunjunganJualRinci {
  id: number;
  idKunjunganjual: number | null;
  idProdukKunjunganjual: number | null;
  nomorProdukKunjunganjual: string;
  namaProdukKunjunganjual: string;
  qtyProdukKunjunganjual: number | null;
  idUnitKunjunganjual: number | null;
  namaUnitKunjunganjual: string;
  hargaUnitKunjunganjual: number | null;
  diskonUnitKunjunganjual: number | null;
  hargaProdukKunjunganjual: number | null;
  diskonProdukKunjunganjual: number | null;
  totalhargaKunjunganjual: number | null;
  keteranganTransaksi: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  kunjunganjual?: KunjunganJual; // belongsTo
  produk?: Product;               // belongsTo
  unit?: Unit;                   // belongsTo
}
