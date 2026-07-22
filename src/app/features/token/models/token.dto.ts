export interface TokenDto {
  id: number;
  tgl: string;
  userdata: number;
  token: string;
  apptoken: string;
  reftoken: string;
  last_access: string;
  status: number;
  created_at?: string;
  updated_at?: string;
}
