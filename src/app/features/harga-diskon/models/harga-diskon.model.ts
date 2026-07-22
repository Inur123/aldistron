import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { HargaDiskonProduk } from '../../harga-diskon-produk/models/harga-diskon-produk.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface HargaDiskon {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  namaHargadiskon: string;
  keteranganHargadiskon: string;
  aktifHargadiskon: boolean;
  awalHargadiskon: Date;
  akhirHargadiskon: Date;
  tipeAlokasiHargadiskon: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
  hargadiskonproduks?: HargaDiskonProduk[]; // hasMany
  pelanggan?: Pelanggan;                   // hasOne
}
