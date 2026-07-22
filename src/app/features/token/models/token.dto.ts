export interface TokenDto {
  id: number;
  tgl: string;
  userdata: number | null;
  token: string;
  apptoken: string;
  reftoken: string;
  last_access: string;
  status: number | null;
  created_at?: string;
  updated_at?: string;
}
