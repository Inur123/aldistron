export interface VerifikasiDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  perusahaan: string;
  nama_administrator: string;
  email_administrator: string;
  email_aolconnector: string;
  serial_number: string;
  kode_maksimal: number;
  expired_date: string;
  serial_aktif: boolean;
  created_at?: string;
  updated_at?: string;
}
