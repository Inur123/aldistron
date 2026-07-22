export interface PelangganPersonal {
  id: number;
  idPelanggan: number;
  idPelangganrinci: number;
  namaPersonal: string;
  nikPersonal: string;
  handphonePersonal: string;
  emailPersonal: string;
  facebookPersonal: string;
  pekerjaanPersonal: string;
  tempatkerjaPersonal: string;
  bisnisPersonal: string;
  keteranganPersonal: string;
  alamatPersonal: string;
  desaPersonal: number;
  kecamatanPersonal: number;
  kotaPersonal: number;
  propinsiPersonal: number;
  negaraPersonal: number;
  latlongPersonal: string;
  imagePersonal: string;
  createdAt?: Date;
  updatedAt?: Date;
}
