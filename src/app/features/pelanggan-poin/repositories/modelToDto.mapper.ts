import { PelangganPoinDto } from '../models/pelanggan-poin.dto';
import { PelangganPoin } from '../models/pelanggan-poin.model';

export class ModelToDtoMapper {
  static toDto(model: PelangganPoin): PelangganPoinDto {
    return model as unknown as PelangganPoinDto;
  }
}
