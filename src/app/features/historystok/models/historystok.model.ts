import { HistorystokRinci } from '../../historystok-rinci/models/historystok-rinci.model';

export interface Historystok {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idUserdata: number | null;
  idPelanggan: number | null;
  kodeKunjungan: string;
  keterangan: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  historystokrincis?: HistorystokRinci[]; // hasMany
}
