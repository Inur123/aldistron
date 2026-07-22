import { HargaPromoProduk } from '../../harga-promo-produk/models/harga-promo-produk.model';
import { Unit } from '../../unit/models/unit.model';
import { Product } from '../../product/models/product.model';

export interface HargaPromoRinci {
  id: number;
  idHargapromoProduk: number;
  idProdukHargapromo: number;
  idUnitHargapromo: number;
  namaUnitHargapromo: string;
  minQtyHargapromo: number;
  maxQtyHargapromo: number;
  idProdukBonus: number;
  namaProdukBonus: string;
  qtyBonus: number;
  idUnitBonus: number;
  nilaiBonus: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargapromoproduk?: HargaPromoProduk;          // belongsTo
  unitHargapromo?: Unit;                        // belongsTo
  produkBonus?: Product;                         // belongsTo
  unitBonus?: Unit;                             // belongsTo
}
