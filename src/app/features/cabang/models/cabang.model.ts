import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Pelanggan } from '../../pelanggan/models/pelanggan.model';

export interface Cabang {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idAolcab: number;
  namaCabang: number;
  alamatCabang: string;
  telpCabang: string;
  handphoneCabang: string;
  picCabang: number;
  defaultCabang: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  // ─── Relasi / Asosiasi Modular RAPIDATA ────────────────────────────────
  aoldatabase?: AolDatabase;
  pelanggan?: Pelanggan;                   // hasOne (1→1)
}

