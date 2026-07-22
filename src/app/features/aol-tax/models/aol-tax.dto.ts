export interface AolTaxDto {
  id: number;
  id_aoldatabase: number;
  id_aoldb: number;
  id_aoltax: number;
  tax_purchase_id: number;
  tax_sales_id: number;
  nama_tax: string;
  nilai_tax: number;
  keterangan_tax: string;
  created_at?: string;
  updated_at?: string;
}
