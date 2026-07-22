import { AolDatabase } from '../../aol-database/models/aol-database.model';
import { Cabang } from '../../cabang/models/cabang.model';
import { RuteKunjungRinci } from '../../rute-kunjung-rinci/models/rute-kunjung-rinci.model';

export interface RuteKunjung {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  idUserdata: number;
  namaRutekunjung: string;
  areaRutekunjung: string;
  hariRutekunjung: string;
  intervalRutekunjung: number;
  namaIntervalRutekunjung: string;
  mulaiRutekunjung: Date;
  mingguKe: number;
  hariPasaran: string;
  keteranganRutekunjung: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  aoldatabase?: AolDatabase;
  cabang?: Cabang;
  rutekunjungrincis?: RuteKunjungRinci[]; // hasMany
}
