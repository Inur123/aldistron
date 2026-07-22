import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';
import { KunjunganTagihRinci } from '../../kunjungan-tagih-rinci/models/kunjungan-tagih-rinci.model';
import { KunjunganTagihNoRute } from '../../kunjungan-tagih-no-rute/models/kunjungan-tagih-no-rute.model';
import { KunjunganSetor } from '../../kunjungan-setor/models/kunjungan-setor.model';

export interface KunjunganTagih {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  kodeKunjungan: string;
  idUserdata: number | null;
  idPelanggan: number | null;
  nomorPelanggan: string;
  idAolcust: number | null;
  idAolsr: number | null;
  nomorSalesreceipt: string;
  hariKunjungantagih: string;
  tanggalKunjungantagih: Date;
  inRute: boolean;
  latlongKunjungantagih: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
  pelanggan?: Pelanggan;
  kunjungantagihrincis?: KunjunganTagihRinci[];   // hasMany
  kunjungantagihnorutes?: KunjunganTagihNoRute[]; // hasMany
  kunjunganSetor?: KunjunganSetor;                // belongsTo
}
