import { PelangganDto } from '../models/pelanggan.dto';
import { Pelanggan } from '../models/pelanggan.model';

export class ModelToDtoMapper {
  static toDto(model: Pelanggan): PelangganDto {
    return model as unknown as PelangganDto;
  }
}
