export interface PelangganKategori {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idAolcustcat: number;
  namaKategori: string;
  keteranganKategori: string;
  parentId: number;
  haschild: boolean;
  logAolcatId: number;
  connectionAol: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
