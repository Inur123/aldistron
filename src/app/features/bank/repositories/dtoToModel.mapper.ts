import { BankDto } from '../models/bank.dto';
import { Bank } from '../models/bank.model';

export class DtoToModelMapper {
  static toModel(dto: BankDto): Bank {
    return {
      id: dto.id,
      namaParam: dto.nama_param,
      stringParam: dto.string_param,
      aliasParam: dto.alias_param,
      dateParam: new Date(dto.date_param),
      integerParam: dto.integer_param,
      floatParam: dto.float_param,
      keteranganParam: dto.keterangan_param,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: BankDto[]): Bank[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
