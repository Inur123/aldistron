export interface VerifikasiDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  perusahaan: string;
  nama_administrator: string;
  email_administrator: string;
  email_aolconnector: string;
  serial_number: string;
  kode_maksimal: number | null;
  expired_date: string;
  serial_aktif: boolean;
  created_at?: string;
  updated_at?: string;
}
