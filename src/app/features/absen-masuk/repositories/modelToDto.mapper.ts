import { AbsenMasukDto } from '../models/absen-masuk.dto';
import { AbsenMasuk } from '../models/absen-masuk.model';

export class ModelToDtoMapper {
  static toDto(model: AbsenMasuk): AbsenMasukDto {
    return model as unknown as AbsenMasukDto;
  }
}
