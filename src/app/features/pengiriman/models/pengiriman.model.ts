export interface Pengiriman {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  idArmada: number;
  kodePengiriman: string;
  tglPengiriman: Date;
  areaPengiriman: string;
  nilaiPengiriman: number;
  dimensiPengiriman: number;
  tonasePengiriman: number;
  idDriver: number;
  namaDriver: string;
  arrayPengirim: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
