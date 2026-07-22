import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface Cabang {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idAolcab: number | null;
  namaCabang: number | null;
  alamatCabang: string;
  telpCabang: string;
  handphoneCabang: string;
  picCabang: number | null;
  defaultCabang: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi Modular RAPIDATA ────────────────────────────────
  aoldatabase?: AolDatabase;
  pelanggan?: Pelanggan;                   // hasOne (1→1)
}

