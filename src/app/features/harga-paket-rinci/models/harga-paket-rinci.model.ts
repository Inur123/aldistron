import { HargaPaket } from '../../harga-paket/models/harga-paket.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface HargaPaketRinci {
  id: number;
  idHargapaket: number | null;
  idProdukUtama: number | null;
  qtyProdukUtama: number | null;
  idUnitProdukUtama: number | null;
  idProdukPaket: number | null;
  qtyProdukPaket: number | null;
  idUnitProdukPaket: number | null;
  kelipatanPaket: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargapaket?: HargaPaket;                      // belongsTo
  produkUtama?: Product;                        // belongsTo
  produkPaket?: Product;                        // belongsTo
  unitUtama?: Unit;                             // belongsTo
  unitPaket?: Unit;                             // belongsTo
}
