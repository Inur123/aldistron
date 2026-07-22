import { BankDto } from '../models/bank.dto';
import { Bank } from '../models/bank.model';

export class ModelToDtoMapper {
  static toDto(model: Bank): BankDto {
    return {
      id: model.id,
      nama_param: model.namaParam,
      string_param: model.stringParam,
      alias_param: model.aliasParam,
      date_param: model.dateParam.toISOString(),
      integer_param: model.integerParam,
      float_param: model.floatParam,
      keterangan_param: model.keteranganParam,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
