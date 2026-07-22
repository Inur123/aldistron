export interface PelangganKategori {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idAolcustcat: number | null;
  namaKategori: string;
  keteranganKategori: string;
  parentId: number | null;
  haschild: boolean;
  logAolcatId: number | null;
  connectionAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
