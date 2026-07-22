import { UnitDto } from '../models/unit.dto';
import { Unit } from '../models/unit.model';

export class ModelToDtoMapper {
  static toDto(model: Unit): UnitDto {
    return model as unknown as UnitDto;
  }
}
