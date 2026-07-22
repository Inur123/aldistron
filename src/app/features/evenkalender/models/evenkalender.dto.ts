export interface EvenkalenderDto {
  id: number;
  nama_even: string;
  keterangan_even: string;
  mulai_even: string;
  selesai_even: string;
  array_data: string;
  status_even: boolean;
  creator: number | null;
  created_at?: string;
  updated_at?: string;
}
