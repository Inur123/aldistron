import { PelangganRequestDto } from '../models/pelanggan-request.dto';
import { PelangganRequest } from '../models/pelanggan-request.model';

export class ModelToDtoMapper {
  static toDto(model: PelangganRequest): PelangganRequestDto {
    return model as unknown as PelangganRequestDto;
  }
}
