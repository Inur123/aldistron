import { KunjunganTagihNoRuteDto } from '../models/kunjungan-tagih-no-rute.dto';
import { KunjunganTagihNoRute } from '../models/kunjungan-tagih-no-rute.model';

export class ModelToDtoMapper {
  static toDto(model: KunjunganTagihNoRute): KunjunganTagihNoRuteDto {
    return model as unknown as KunjunganTagihNoRuteDto;
  }
}
