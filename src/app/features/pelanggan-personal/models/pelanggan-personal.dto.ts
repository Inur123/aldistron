export interface PelangganPersonalDto {
  id: number;
  id_pelanggan: number;
  id_pelangganrinci: number;
  nama_personal: string;
  nik_personal: string;
  handphone_personal: string;
  email_personal: string;
  facebook_personal: string;
  pekerjaan_personal: string;
  tempatkerja_personal: string;
  bisnis_personal: string;
  keterangan_personal: string;
  alamat_personal: string;
  desa_personal: number;
  kecamatan_personal: number;
  kota_personal: number;
  propinsi_personal: number;
  negara_personal: number;
  latlong_personal: string;
  image_personal: string;
  created_at?: string;
  updated_at?: string;
}
