import { CabangDto } from '../models/cabang.dto';
import { Cabang } from '../models/cabang.model';

export class ModelToDtoMapper {
  static toDto(model: Cabang): CabangDto {
    return model as unknown as CabangDto;
  }
}
