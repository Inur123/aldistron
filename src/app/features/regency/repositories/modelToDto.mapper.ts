import { RegencyDto } from '../models/regency.dto';
import { Regency } from '../models/regency.model';

export class ModelToDtoMapper {
  static toDto(model: Regency): RegencyDto {
    return model as unknown as RegencyDto;
  }
}
