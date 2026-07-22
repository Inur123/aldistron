export interface HttpStatusDto {
  id: number;
  jenis: string;
  status: string;
  status_indo: string;
  kode: number | null;
  keterangan: string;
  created_at?: string;
  updated_at?: string;
}
