import { PiutangAktualDto } from '../models/piutang-aktual.dto';
import { PiutangAktual } from '../models/piutang-aktual.model';

export class ModelToDtoMapper {
  static toDto(model: PiutangAktual): PiutangAktualDto {
    return model as unknown as PiutangAktualDto;
  }
}
