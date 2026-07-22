export interface Otp {
  id: number;
  userdata: number | null;
  otp: string;
  aktif: boolean;
  device: string;
  idDevice: string;
  ipAddress: string;
  expiredAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
