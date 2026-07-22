import { PelangganPersonalDto } from '../models/pelanggan-personal.dto';
import { PelangganPersonal } from '../models/pelanggan-personal.model';

export class ModelToDtoMapper {
  static toDto(model: PelangganPersonal): PelangganPersonalDto {
    return model as unknown as PelangganPersonalDto;
  }
}
