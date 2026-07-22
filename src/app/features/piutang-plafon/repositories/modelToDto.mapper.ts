import { PiutangPlafonDto } from '../models/piutang-plafon.dto';
import { PiutangPlafon } from '../models/piutang-plafon.model';

export class ModelToDtoMapper {
  static toDto(model: PiutangPlafon): PiutangPlafonDto {
    return model as unknown as PiutangPlafonDto;
  }
}
