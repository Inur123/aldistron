import { UseradminDto } from '../models/useradmin.dto';
import { Useradmin } from '../models/useradmin.model';

export class ModelToDtoMapper {
  static toDto(model: Useradmin): UseradminDto {
    return model as unknown as UseradminDto;
  }
}
