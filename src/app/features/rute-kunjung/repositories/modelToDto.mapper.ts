import { RuteKunjungDto } from '../models/rute-kunjung.dto';
import { RuteKunjung } from '../models/rute-kunjung.model';

export class ModelToDtoMapper {
  static toDto(model: RuteKunjung): RuteKunjungDto {
    return model as unknown as RuteKunjungDto;
  }
}
