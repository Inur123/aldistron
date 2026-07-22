export interface PelangganPersonalDto {
  id: number;
  id_pelanggan: number | null;
  id_pelangganrinci: number | null;
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
  desa_personal: number | null;
  kecamatan_personal: number | null;
  kota_personal: number | null;
  propinsi_personal: number | null;
  negara_personal: number | null;
  latlong_personal: string;
  image_personal: string;
  created_at?: string;
  updated_at?: string;
}
