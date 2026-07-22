import { KunjunganSetorDto } from '../models/kunjungan-setor.dto';
import { KunjunganSetor } from '../models/kunjungan-setor.model';

export class ModelToDtoMapper {
  static toDto(model: KunjunganSetor): KunjunganSetorDto {
    return model as unknown as KunjunganSetorDto;
  }
}
