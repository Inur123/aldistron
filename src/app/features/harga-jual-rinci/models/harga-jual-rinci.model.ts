import { HargaJual } from '../../harga-jual/models/harga-jual.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface HargaJualRinci {
  id: number;
  idHargajual: number | null;
  idProduk: number | null;
  idUnit: number | null;
  hargajualHet: number | null;
  hargajualRetail: number | null;
  hargajualWo: number | null;
  hargajualSo: number | null;
  hargajualCustom: number | null;
  hargajualSpesial: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargajual?: HargaJual;                          // belongsTo
  produk?: Product;                               // belongsTo
  unit?: Unit;                                    // belongsTo
}
