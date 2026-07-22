import { HargaDiskonProduk } from '../../harga-diskon-produk/models/harga-diskon-produk.model';
import { Unit } from '../../unit/models/unit.model';

export interface HargaDiskonRinci {
  id: number;
  idHargadiskonProduk: number;
  idProdukHargadiskon: number;
  idUnitHargadiskon: number;
  namaUnitHargadiskon: string;
  diskonTipe: string;
  minQtyHargadiskon: number;
  maxQtyHargadiskon: number;
  diskonRupiah: number;
  diskonPersen: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargadiskonproduk?: HargaDiskonProduk;        // belongsTo
  unit?: Unit;                                  // belongsTo
}
