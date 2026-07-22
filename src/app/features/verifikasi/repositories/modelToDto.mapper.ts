import { VerifikasiDto } from '../models/verifikasi.dto';
import { Verifikasi } from '../models/verifikasi.model';

export class ModelToDtoMapper {
  static toDto(model: Verifikasi): VerifikasiDto {
    return model as unknown as VerifikasiDto;
  }
}
