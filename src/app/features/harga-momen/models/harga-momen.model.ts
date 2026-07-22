import { Cabang } from '../../cabang/models/cabang.model';
import { HargaMomenRinci } from '../../harga-momen-rinci/models/harga-momen-rinci.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface HargaMomen {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  namaHargamomen: string;
  keteranganHargamomen: string;
  aktifHargamomen: boolean;
  awalHargamomen: Date;
  akhirHargamomen: Date;
  tipeAlokasiHargamomen: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  cabang?: Cabang;
  hargamomenrincis?: HargaMomenRinci[]; // hasMany
  pelanggan?: Pelanggan;                // hasOne
}
