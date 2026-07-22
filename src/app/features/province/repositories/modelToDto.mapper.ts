import { ProvinceDto } from '../models/province.dto';
import { Province } from '../models/province.model';

export class ModelToDtoMapper {
  static toDto(model: Province): ProvinceDto {
    return model as unknown as ProvinceDto;
  }
}
