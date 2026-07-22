import { HistorystokRinci } from '../../historystok-rinci/models/historystok-rinci.model';

export interface Historystok {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  idUserdata: number;
  idPelanggan: number;
  kodeKunjungan: string;
  keterangan: string;
  createdAt?: Date;
  updatedAt?: Date;

  // ─── Relasi / Asosiasi ───────────────────────────────────────────────────
  historystokrincis?: HistorystokRinci[]; // hasMany
}
