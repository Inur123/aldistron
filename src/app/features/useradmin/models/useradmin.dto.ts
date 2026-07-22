export interface UseradminDto {
  id: number;
  id_userdata: number | null;
  nama: string;
  username: string;
  password?: string;
  level: string;
  divisi: string;
  is_administrator: boolean;
  nama_administrator: string;
  email_administrator: string;
  created_at?: string;
  updated_at?: string;
  deleted_at: string;
}
