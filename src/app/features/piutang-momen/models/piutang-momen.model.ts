export interface PiutangMomen {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  namaPiutangmomen: string;
  keteranganPiutangmomen: string;
  aktifPiutangmomen: boolean;
  awalPiutangmomen: Date;
  akhirPiutangmomen: Date;
  tipeAlokasiPiutangmomen: string;
  poinPiutangmomen: number;
  createdAt?: Date;
  updatedAt?: Date;
}
