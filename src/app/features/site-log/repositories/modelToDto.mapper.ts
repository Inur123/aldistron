import { SiteLogDto } from '../models/site-log.dto';
import { SiteLog } from '../models/site-log.model';

export class ModelToDtoMapper {
  static toDto(model: SiteLog): SiteLogDto {
    return model as unknown as SiteLogDto;
  }
}
