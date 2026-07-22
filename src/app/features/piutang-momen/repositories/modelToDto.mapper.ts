import { PiutangMomenDto } from '../models/piutang-momen.dto';
import { PiutangMomen } from '../models/piutang-momen.model';

export class ModelToDtoMapper {
  static toDto(model: PiutangMomen): PiutangMomenDto {
    return model as unknown as PiutangMomenDto;
  }
}
