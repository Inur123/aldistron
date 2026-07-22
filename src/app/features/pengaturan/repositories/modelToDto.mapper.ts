import { PengaturanDto } from '../models/pengaturan.dto';
import { Pengaturan } from '../models/pengaturan.model';

export class ModelToDtoMapper {
  static toDto(model: Pengaturan): PengaturanDto {
    return model as unknown as PengaturanDto;
  }
}
