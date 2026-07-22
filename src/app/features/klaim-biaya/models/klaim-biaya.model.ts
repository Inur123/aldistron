import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { KlaimBiayaRinci } from '../../klaim-biaya-rinci/models/klaim-biaya-rinci.model';

export interface KlaimBiaya {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idUserdata: number | null;
  kodeKlaim: string;
  kodeKunjungan: string;
  totalKlaim: number | null;
  idAolexpense: number | null;
  nomorExpense: string;
  mingguKlaim: number | null;
  bulanKlaim: number | null;
  tahunKlaim: number | null;
  selesai: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;             // belongsTo
  cabang?: Cabang;                       // belongsTo
  klaimbiayarincis?: KlaimBiayaRinci[];  // hasMany
}
