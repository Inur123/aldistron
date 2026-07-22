export interface KunjunganJualDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  nama_cabang: string;
  kode_kunjungan: string;
  id_userdata: number | null;
  id_pelanggan: number | null;
  nomor_pelanggan: string;
  alamat_pelanggan: string;
  id_jangkapiutang: number | null;
  nama_jangkapiutang: string;
  id_aolso: number | null;
  hari_kunjunganjual: string;
  tanggal_kunjunganjual: string;
  tanggal_kirim: string;
  nomor_salesorder: string;
  nilai_salesorder: number | null;
  diskon_faktur: number | null;
  nilai_poin: number | null;
  latlong_kunjunganjual: string;
  created_at?: string;
  updated_at?: string;
}
