import { PelangganRinciDto } from '../models/pelanggan-rinci.dto';
import { PelangganRinci } from '../models/pelanggan-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: PelangganRinci): PelangganRinciDto {
    return model as unknown as PelangganRinciDto;
  }
}
