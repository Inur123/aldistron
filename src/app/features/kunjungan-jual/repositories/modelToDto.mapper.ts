import { KunjunganJualDto } from '../models/kunjungan-jual.dto';
import { KunjunganJual } from '../models/kunjungan-jual.model';

export class ModelToDtoMapper {
  static toDto(model: KunjunganJual): KunjunganJualDto {
    return model as unknown as KunjunganJualDto;
  }
}
