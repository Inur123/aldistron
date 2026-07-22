import { AolDatabase } from '../../aol-database/models/aol-database.model';

export interface Pengaturan {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  perusahaan: string;
  parameter: string;
  namaParam: string;
  namaSlug: string;
  paramInt: number;
  paramString: string;
  katString: string;
  paramArray: string;
  keterangan: string;
  createdAt?: Date;
  updatedAt?: Date;

  // Relasi
  aoldatabase?: AolDatabase;
}
