export interface VendorRinciDto {
  id: number;
  id_vendor: number;
  nama_vendor: string;
  kontak_vendor: string;
  alamat_gudang: string;
  desa_vendor: number;
  kecamatan_vendor: number;
  kota_vendor: number;
  propinsi_vendor: number;
  negara_vendor: number;
  latlong_vendor: string;
  alamat_bayar_vendor: string;
  telp_vendor: string;
  handphone_vendor: string;
  email_vendor: string;
  nik_vendor: string;
  npwp_vendor: string;
  keterangan_vendor: string;
  infokhusus_vendor: string;
  created_at?: string;
  updated_at?: string;
}
