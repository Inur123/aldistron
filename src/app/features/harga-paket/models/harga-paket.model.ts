import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { HargaPaketRinci } from '../../harga-paket-rinci/models/harga-paket-rinci.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface HargaPaket {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  namaHargapaket: string;
  keteranganHargapaket: string;
  aktifHargapaket: boolean;
  awalHargapaket: Date;
  akhirHargapaket: Date;
  tipeAlokasiHargapaket: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
  hargapaketrincis?: HargaPaketRinci[]; // hasMany
  pelanggan?: Pelanggan;                // hasOne
}
