export interface Keycode {
  id: number;
  idAoldatabase: number;
  idAoldb: number;
  idCabang: number;
  keycodeKategori: string;
  keycodeAlphanum: string;
  keycodeAlphanumRequest: string;
  keycodeNumber: string;
  keycodeNumberRequest: string;
  keycodeKeterangan: string;
  keycodeAktif: boolean;
  idUserdata: number;
  namaUserdata: string;
  emailUserdata: string;
  namaAdministrator: string;
  emailAdministrator: string;
  kodeVerifikasi: string;
  idDeviceOri: string;
  idDeviceRequest: string;
  ipaddressRequest: string;
  createdAt?: Date;
  updatedAt?: Date;
}
