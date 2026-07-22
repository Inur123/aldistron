export interface Pengiriman {
  id: number;
  idAoldatabase: number | null;
  idAoldb: number | null;
  idCabang: number | null;
  idArmada: number | null;
  kodePengiriman: string;
  tglPengiriman: Date;
  areaPengiriman: string;
  nilaiPengiriman: number | null;
  dimensiPengiriman: number | null;
  tonasePengiriman: number | null;
  idDriver: number | null;
  namaDriver: string;
  arrayPengirim: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
