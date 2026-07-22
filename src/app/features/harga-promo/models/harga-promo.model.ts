import { Cabang } from '../../cabang/models/cabang.model';
import { HargaPromoProduk } from '../../harga-promo-produk/models/harga-promo-produk.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface HargaPromo {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  namaHargapromo: string;
  keteranganHargapromo: string;
  aktifHargapromo: boolean;
  awalHargapromo: Date;
  akhirHargapromo: Date;
  tipeAlokasiHargapromo: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  cabang?: Cabang;
  hargapromoproduks?: HargaPromoProduk[]; // hasMany
  pelanggan?: Pelanggan;                  // hasOne
}
