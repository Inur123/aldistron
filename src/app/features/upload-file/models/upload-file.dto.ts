export interface UploadFileDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  file_category: string;
  file_usability: string;
  file_extension: string;
  file_fieldname: string;
  file_originalname: string;
  file_filename: string;
  file_path: string;
  file_size: number | null;
  file_used: boolean;
  user_editor: number | null;
  created_at?: string;
  updated_at?: string;
}
