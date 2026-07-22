import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface PiutangAktual {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  tanggalUpdate: string;
  kodeRealtime: string;
  idAolinv: number;
  idAolcust: number;
  nomorInvoice: string;
  tanggalJatuhtempo: Date;
  totalPiutang: number;
  sisaPiutang: number;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
  cabang?: Cabang;           // belongsTo
  pelanggan?: Pelanggan;     // belongsTo
}
