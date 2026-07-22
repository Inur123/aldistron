import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { KlaimBiayaRinci } from '../../klaim-biaya-rinci/models/klaim-biaya-rinci.model';

export interface KlaimBiaya {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  idUserdata: number;
  kodeKlaim: string;
  kodeKunjungan: string;
  totalKlaim: number;
  idAolexpense: number;
  nomorExpense: string;
  mingguKlaim: number;
  bulanKlaim: number;
  tahunKlaim: number;
  selesai: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;             // belongsTo
  cabang?: Cabang;                       // belongsTo
  klaimbiayarincis?: KlaimBiayaRinci[];  // hasMany
}
