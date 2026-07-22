import { Product } from '../../product/models/product.model';
import { HargaDiskon } from '../../harga-diskon/models/harga-diskon.model';
import { HargaDiskonRinci } from '../../harga-diskon-rinci/models/harga-diskon-rinci.model';

export interface HargaDiskonProduk {
  id: number;
  idHargadiskon: number | null;
  idProduk: number | null;
  namaProdukHargadiskon: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  produk?: Product;                             // belongsTo
  hargadiskon?: HargaDiskon;                    // belongsTo
  hargadiskonrincis?: HargaDiskonRinci[];       // hasMany
}
