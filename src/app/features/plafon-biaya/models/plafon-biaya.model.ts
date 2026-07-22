export interface PlafonBiaya {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idParam: number | null;
  idUserdata: number | null;
  kategoriParam: string;
  kodeParam: string;
  slugParam: string;
  intervalParam: number | null;
  mingguParam: boolean;
  bulanParam: boolean;
  tahunParam: boolean;
  nilaiParam: number | null;
  qtyParam: number | null;
  keteranganParam: string;
  createdAt?: Date;
  updatedAt?: Date;
}
