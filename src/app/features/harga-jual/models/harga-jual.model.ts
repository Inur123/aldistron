import { Cabang } from '../../cabang/models/cabang.model';
import { HargaJualRinci } from '../../harga-jual-rinci/models/harga-jual-rinci.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface HargaJual {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  namaHargajual: string;
  keteranganHargajual: string;
  aktifHargajual: boolean;
  awalHargajual: Date;
  akhirHargajual: Date;
  tipeAlokasiHargajual: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  cabang?: Cabang;
  hargajualrincis?: HargaJualRinci[];   // hasMany
  pelanggan?: Pelanggan;                // hasOne
}
