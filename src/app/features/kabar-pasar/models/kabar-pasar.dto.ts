export interface KabarPasarDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  nama_administrator: string;
  email_administrator: string;
  id_userdata: number;
  id_produk: number;
  id_vendor: number;
  share_vendor: boolean;
  id_produk_kompetitor: number;
  id_pelanggan: number;
  province_id: number;
  regency_id: number;
  district_id: number;
  village_id: number;
  nama_propinsi: string;
  nama_kabupaten: string;
  nama_kecamatan: string;
  nama_desa: string;
  kategori: string;
  gambar_kabar: string;
  keterangan: string;
  created_at?: string;
  updated_at?: string;
}
