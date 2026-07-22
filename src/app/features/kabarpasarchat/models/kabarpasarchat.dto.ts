export interface KabarpasarchatDto {
  id: number;
  id_kabarpasar: number | null;
  id_userdata: number | null;
  nama_userdata: string;
  isi_chat: string;
  image_chat: string;
  icon_chat: string;
  link_reply: string;
  data_reply: string;
  hide_chat: boolean;
  created_at?: string;
  updated_at?: string;
}
