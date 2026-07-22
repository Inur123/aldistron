import { AolTaxDto } from '../models/aol-tax.dto';
import { AolTax } from '../models/aol-tax.model';

export class DtoToModelMapper {
  static toModel(dto: AolTaxDto): AolTax {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idAoltax: dto.id_aoltax,
      taxPurchaseId: dto.tax_purchase_id,
      taxSalesId: dto.tax_sales_id,
      namaTax: dto.nama_tax,
      nilaiTax: dto.nilai_tax,
      keteranganTax: dto.keterangan_tax,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: AolTaxDto[]): AolTax[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
