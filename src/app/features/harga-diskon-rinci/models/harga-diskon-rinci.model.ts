import { HargaDiskonProduk } from '../../harga-diskon-produk/models/harga-diskon-produk.model';
import { Unit } from '../../unit/models/unit.model';

export interface HargaDiskonRinci {
  id: number;
  idHargadiskonProduk: number | null;
  idProdukHargadiskon: number | null;
  idUnitHargadiskon: number | null;
  namaUnitHargadiskon: string;
  diskonTipe: string;
  minQtyHargadiskon: number | null;
  maxQtyHargadiskon: number | null;
  diskonRupiah: number | null;
  diskonPersen: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  hargadiskonproduk?: HargaDiskonProduk;        // belongsTo
  unit?: Unit;                                  // belongsTo
}
