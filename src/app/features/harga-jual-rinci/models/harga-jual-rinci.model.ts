import { HargaJual } from '../../harga-jual/models/harga-jual.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface HargaJualRinci {
  id: number;
  idHargajual: number;
  idProduk: number;
  idUnit: number;
  hargajualHet: number;
  hargajualRetail: number;
  hargajualWo: number;
  hargajualSo: number;
  hargajualCustom: number;
  hargajualSpesial: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargajual?: HargaJual;                          // belongsTo
  produk?: Product;                               // belongsTo
  unit?: Unit;                                    // belongsTo
}
