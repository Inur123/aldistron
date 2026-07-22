export interface Sysadmin {
  id: number;
  namaSysadmin: string;
  handphoneSysadmin: string;
  passwordSysadmin: string;
  randomPassword: string;
  otpSysadmin: string;
  tokenSysadmin: string;
  reftokenSysadmin: string;
  emailSysadmin: string;
  levelSysadmin: string;
  imageSysadmin: string;
  keterangan: string;
  aktifSysadmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
