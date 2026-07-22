import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';
import { KunjunganTagihRinci } from '../../kunjungan-tagih-rinci/models/kunjungan-tagih-rinci.model';
import { KunjunganTagihNoRute } from '../../kunjungan-tagih-no-rute/models/kunjungan-tagih-no-rute.model';
import { KunjunganSetor } from '../../kunjungan-setor/models/kunjungan-setor.model';

export interface KunjunganTagih {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  kodeKunjungan: string;
  idUserdata: number;
  idPelanggan: number;
  nomorPelanggan: string;
  idAolcust: number;
  idAolsr: number;
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
