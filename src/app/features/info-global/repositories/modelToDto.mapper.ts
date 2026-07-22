import { InfoGlobalDto } from '../models/info-global.dto';
import { InfoGlobal } from '../models/info-global.model';

export class ModelToDtoMapper {
  static toDto(model: InfoGlobal): InfoGlobalDto {
    return model as unknown as InfoGlobalDto;
  }
}
