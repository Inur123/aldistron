import { KunjunganTagihDto } from '../models/kunjungan-tagih.dto';
import { KunjunganTagih } from '../models/kunjungan-tagih.model';

export class ModelToDtoMapper {
  static toDto(model: KunjunganTagih): KunjunganTagihDto {
    return model as unknown as KunjunganTagihDto;
  }
}
