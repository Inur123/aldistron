export interface VendorRinciDto {
  id: number;
  id_vendor: number | null;
  nama_vendor: string;
  kontak_vendor: string;
  alamat_gudang: string;
  desa_vendor: number | null;
  kecamatan_vendor: number | null;
  kota_vendor: number | null;
  propinsi_vendor: number | null;
  negara_vendor: number | null;
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
