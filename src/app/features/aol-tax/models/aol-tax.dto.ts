export interface AolTaxDto {
  id: number;
  id_aoldatabase: number | null;
  id_aoldb: number | null;
  id_aoltax: number | null;
  tax_purchase_id: number | null;
  tax_sales_id: number | null;
  nama_tax: string;
  nilai_tax: number | null;
  keterangan_tax: string;
  created_at?: string;
  updated_at?: string;
}
