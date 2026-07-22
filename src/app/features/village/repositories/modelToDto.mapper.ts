import { VillageDto } from '../models/village.dto';
import { Village } from '../models/village.model';

export class ModelToDtoMapper {
  static toDto(model: Village): VillageDto {
    return model as unknown as VillageDto;
  }
}
