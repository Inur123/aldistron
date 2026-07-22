import { HariKerjaDto } from '../models/hari-kerja.dto';
import { HariKerja } from '../models/hari-kerja.model';

export class ModelToDtoMapper {
  static toDto(model: HariKerja): HariKerjaDto {
    return model as unknown as HariKerjaDto;
  }
}
