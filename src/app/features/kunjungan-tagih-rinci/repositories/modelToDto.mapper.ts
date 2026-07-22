import { KunjunganTagihRinciDto } from '../models/kunjungan-tagih-rinci.dto';
import { KunjunganTagihRinci } from '../models/kunjungan-tagih-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: KunjunganTagihRinci): KunjunganTagihRinciDto {
    return model as unknown as KunjunganTagihRinciDto;
  }
}
