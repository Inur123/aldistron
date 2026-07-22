import { JangkaPiutangDto } from '../models/jangka-piutang.dto';
import { JangkaPiutang } from '../models/jangka-piutang.model';

export class ModelToDtoMapper {
  static toDto(model: JangkaPiutang): JangkaPiutangDto {
    return model as unknown as JangkaPiutangDto;
  }
}
