import { HargaMomen } from '../../harga-momen/models/harga-momen.model';
import { Product } from '../../product/models/product.model';
import { Unit } from '../../unit/models/unit.model';

export interface HargaMomenRinci {
  id: number;
  idHargamomen: number;
  tipeMomen: string;
  totalMomen: number;
  potonganRupiah: number;
  potonganPersen: number;
  idProdukHargamomen: number;
  qtyProdukHargamomen: number;
  idUnitProdukHargamomen: number;
  poinHargamomen: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargamomen?: HargaMomen;                      // belongsTo
  produk?: Product;                             // belongsTo
  unit?: Unit;                                  // belongsTo
}
