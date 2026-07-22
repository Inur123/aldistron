export interface Otp {
  id: number;
  userdata: number;
  otp: string;
  aktif: boolean;
  device: string;
  idDevice: string;
  ipAddress: string;
  expiredAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
