export interface SysadminDto {
  id: number;
  nama_sysadmin: string;
  handphone_sysadmin: string;
  password_sysadmin: string;
  random_password: string;
  otp_sysadmin: string;
  token_sysadmin: string;
  reftoken_sysadmin: string;
  email_sysadmin: string;
  level_sysadmin: string;
  image_sysadmin: string;
  keterangan: string;
  aktif_sysadmin: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}
