import { HargaPromo } from '../../harga-promo/models/harga-promo.model';
import { Product } from '../../product/models/product.model';
import { HargaPromoRinci } from '../../harga-promo-rinci/models/harga-promo-rinci.model';

export interface HargaPromoProduk {
  id: number;
  idHargapromo: number | null;
  idProduk: number | null;
  namaProdukHargapromo: string;
  includeMax: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargapromo?: HargaPromo;                      // belongsTo
  produk?: Product;                             // belongsTo
  hargapromorincis?: HargaPromoRinci[];         // hasMany
}
