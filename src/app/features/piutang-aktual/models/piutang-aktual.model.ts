import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface PiutangAktual {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  tanggalUpdate: string;
  kodeRealtime: string;
  idAolinv: number | null;
  idAolcust: number | null;
  nomorInvoice: string;
  tanggalJatuhtempo: Date;
  totalPiutang: number | null;
  sisaPiutang: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase; // belongsTo
  cabang?: Cabang;           // belongsTo
  pelanggan?: Pelanggan;     // belongsTo
}
