import { AolTaxDto } from '../models/aol-tax.dto';
import { AolTax } from '../models/aol-tax.model';

export class ModelToDtoMapper {
  static toDto(model: AolTax): AolTaxDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_aoltax: model.idAoltax,
      tax_purchase_id: model.taxPurchaseId,
      tax_sales_id: model.taxSalesId,
      nama_tax: model.namaTax,
      nilai_tax: model.nilaiTax,
      keterangan_tax: model.keteranganTax,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
