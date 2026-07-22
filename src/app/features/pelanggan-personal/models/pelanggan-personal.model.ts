export interface PelangganPersonal {
  id: number;
  idPelanggan: number | null;
  idPelangganrinci: number | null;
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
  desaPersonal: number | null;
  kecamatanPersonal: number | null;
  kotaPersonal: number | null;
  propinsiPersonal: number | null;
  negaraPersonal: number | null;
  latlongPersonal: string;
  imagePersonal: string;
  createdAt?: Date;
  updatedAt?: Date;
}
