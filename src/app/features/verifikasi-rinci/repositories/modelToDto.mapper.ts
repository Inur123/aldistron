import { VerifikasiRinciDto } from '../models/verifikasi-rinci.dto';
import { VerifikasiRinci } from '../models/verifikasi-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: VerifikasiRinci): VerifikasiRinciDto {
    return model as unknown as VerifikasiRinciDto;
  }
}
