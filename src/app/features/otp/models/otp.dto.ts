export interface OtpDto {
  id: number;
  userdata: number;
  otp: string;
  aktif: boolean;
  device: string;
  id_device: string;
  ip_address: string;
  expired_at: string;
  created_at?: string;
  updated_at?: string;
}
