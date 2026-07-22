export interface EvenkalenderRinciDto {
  id: number;
  id_evenkalender: number | null;
  keterangan: string;
  desa_even: string;
  kecamatan_even: string;
  kota_even: string;
  propinsi_even: string;
  kode_desa: string;
  latlong_even: string;
  image_even: string;
  hasil_even: string;
  array_image: string[];
  array_feedback: string[];
  array_user: string[];
  array_userid: string[];
  array_produk: string[];
  array_unit: string[];
  array_vendor: string[];
  array_date: string[];
  created_at?: string;
  updated_at?: string;
}
