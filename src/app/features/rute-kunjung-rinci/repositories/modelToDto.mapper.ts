import { RuteKunjungRinciDto } from '../models/rute-kunjung-rinci.dto';
import { RuteKunjungRinci } from '../models/rute-kunjung-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: RuteKunjungRinci): RuteKunjungRinciDto {
    return model as unknown as RuteKunjungRinciDto;
  }
}
