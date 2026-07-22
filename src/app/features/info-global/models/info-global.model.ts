export interface InfoGlobal {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idUserdata: number | null;
  namaInfoglobal: string;
  slug: string;
  keteranganInfoglobal: string;
  aktifInfoglobal: boolean;
  awalInfoglobal: Date;
  akhirInfoglobal: Date;
  gambarInfoglobal: string;
  arrayIdvendor: number[];
  createdAt?: Date;
  updatedAt?: Date;
}
