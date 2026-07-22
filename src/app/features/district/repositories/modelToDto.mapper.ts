import { DistrictDto } from '../models/district.dto';
import { District } from '../models/district.model';

export class ModelToDtoMapper {
  static toDto(model: District): DistrictDto {
    return model as unknown as DistrictDto;
  }
}
