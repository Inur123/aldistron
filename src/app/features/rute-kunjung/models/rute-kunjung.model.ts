import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { RuteKunjungRinci } from '../../rute-kunjung-rinci/models/rute-kunjung-rinci.model';

export interface RuteKunjung {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idUserdata: number | null;
  namaRutekunjung: string;
  areaRutekunjung: string;
  hariRutekunjung: string;
  intervalRutekunjung: number | null;
  namaIntervalRutekunjung: string;
  mulaiRutekunjung: Date;
  mingguKe: number | null;
  hariPasaran: string;
  keteranganRutekunjung: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
  rutekunjungrincis?: RuteKunjungRinci[]; // hasMany
}
