import { HargaPaket } from '../../harga-paket/models/harga-paket.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface HargaPaketRinci {
  id: number;
  idHargapaket: number;
  idProdukUtama: number;
  qtyProdukUtama: number;
  idUnitProdukUtama: number;
  idProdukPaket: number;
  qtyProdukPaket: number;
  idUnitProdukPaket: number;
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
