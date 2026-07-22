export interface KeycodeDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_cabang: number | null;
  keycode_kategori: string;
  keycode_alphanum: string;
  keycode_alphanum_request: string;
  keycode_number: string;
  keycode_number_request: string;
  keycode_keterangan: string;
  keycode_aktif: boolean;
  id_userdata: number | null;
  nama_userdata: string;
  email_userdata: string;
  nama_administrator: string;
  email_administrator: string;
  kode_verifikasi: string;
  id_device_ori: string;
  id_device_request: string;
  ipaddress_request: string;
  created_at?: string;
  updated_at?: string;
}
