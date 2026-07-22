export interface KabarPasarDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  nama_administrator: string;
  email_administrator: string;
  id_userdata: number | null;
  id_produk: number | null;
  id_vendor: number | null;
  share_vendor: boolean;
  id_produk_kompetitor: number | null;
  id_pelanggan: number | null;
  province_id: number | null;
  regency_id: number | null;
  district_id: number | null;
  village_id: number | null;
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
