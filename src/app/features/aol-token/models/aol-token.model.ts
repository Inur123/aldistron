export interface AolToken {
  id: number;
  accessToken: string;
  refreshToken: string;
  expiresIn: number | null;
  tokenType: string;
  scope: string;
  tglExpired: Date;
  aoluserName: string;
  aoluserNickname: string;
  aoluserMobile: string;
  aoluserId: string;
  aoluserEmail: string;
  kodeseriKoneksi: string;
  createdAt?: Date;
  updatedAt?: Date;
}
