import { InfoKhususDto } from '../models/info-khusus.dto';
import { InfoKhusus } from '../models/info-khusus.model';

export class ModelToDtoMapper {
  static toDto(model: InfoKhusus): InfoKhususDto {
    return model as unknown as InfoKhususDto;
  }
}
