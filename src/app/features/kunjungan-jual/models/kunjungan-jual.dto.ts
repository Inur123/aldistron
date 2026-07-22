export interface KunjunganJualDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_cabang: number;
  nama_cabang: string;
  kode_kunjungan: string;
  id_userdata: number;
  id_pelanggan: number;
  nomor_pelanggan: string;
  alamat_pelanggan: string;
  id_jangkapiutang: number;
  nama_jangkapiutang: string;
  id_aolso: number;
  hari_kunjunganjual: string;
  tanggal_kunjunganjual: string;
  tanggal_kirim: string;
  nomor_salesorder: string;
  nilai_salesorder: number;
  diskon_faktur: number;
  nilai_poin: number;
  latlong_kunjunganjual: string;
  created_at?: string;
  updated_at?: string;
}
