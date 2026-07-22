import { HargaMomen } from '../../harga-momen/models/harga-momen.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface HargaMomenRinci {
  id: number;
  idHargamomen: number | null;
  tipeMomen: string;
  totalMomen: number | null;
  potonganRupiah: number | null;
  potonganPersen: number | null;
  idProdukHargamomen: number | null;
  qtyProdukHargamomen: number | null;
  idUnitProdukHargamomen: number | null;
  poinHargamomen: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargamomen?: HargaMomen;                      // belongsTo
  produk?: Product;                             // belongsTo
  unit?: Unit;                                  // belongsTo
}
