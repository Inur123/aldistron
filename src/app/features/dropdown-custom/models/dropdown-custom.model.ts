export interface DropdownCustom {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  namaAdministrator: string;
  emailAdministrator: string;
  kategoriParam: string;
  jenisParam: string;
  namaParam: string;
  aliasParam: string;
  slugParam: string;
  stringParam: string;
  dateParam: Date;
  integerParam: number | null;
  floatParam: number | null;
  doubleParam: number | null;
  textParam: string;
  valueParam: string;
  keteranganParam: string;
  aktifParam: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
