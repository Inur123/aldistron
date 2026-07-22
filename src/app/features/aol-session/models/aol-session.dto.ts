export interface AolSessionDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  dataversion_aol: string;
  licenseend_aol: string;
  session_aol: string;
  host_aol: string;
  admin_aol: boolean;
  accessibleuntil_aol: string;
  trial_aol: boolean;
  created_at?: string;
  updated_at?: string;
}
