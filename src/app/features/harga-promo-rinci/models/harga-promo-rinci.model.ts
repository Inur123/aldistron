import { HargaPromoProduk } from '../../harga-promo-produk/models/harga-promo-produk.model';
import { Unit } from '../../unit/models/unit.model';
import { Product } from '../../product/models/product.model';

export interface HargaPromoRinci {
  id: number;
  idHargapromoProduk: number | null;
  idProdukHargapromo: number | null;
  idUnitHargapromo: number | null;
  namaUnitHargapromo: string;
  minQtyHargapromo: number | null;
  maxQtyHargapromo: number | null;
  idProdukBonus: number | null;
  namaProdukBonus: string;
  qtyBonus: number | null;
  idUnitBonus: number | null;
  nilaiBonus: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargapromoproduk?: HargaPromoProduk;          // belongsTo
  unitHargapromo?: Unit;                        // belongsTo
  produkBonus?: Product;                         // belongsTo
  unitBonus?: Unit;                             // belongsTo
}
