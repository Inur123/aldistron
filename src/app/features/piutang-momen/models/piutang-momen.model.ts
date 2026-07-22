export interface PiutangMomen {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  namaPiutangmomen: string;
  keteranganPiutangmomen: string;
  aktifPiutangmomen: boolean;
  awalPiutangmomen: Date;
  akhirPiutangmomen: Date;
  tipeAlokasiPiutangmomen: string;
  poinPiutangmomen: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}
