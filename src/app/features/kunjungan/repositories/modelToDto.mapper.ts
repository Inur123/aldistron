import { KunjunganDto } from '../models/kunjungan.dto';
import { Kunjungan } from '../models/kunjungan.model';

export class ModelToDtoMapper {
  static toDto(model: Kunjungan): KunjunganDto {
    return model as unknown as KunjunganDto;
  }
}
