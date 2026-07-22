import { HistorystokRinciDto } from '../models/historystok-rinci.dto';
import { HistorystokRinci } from '../models/historystok-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: HistorystokRinci): HistorystokRinciDto {
    return model as unknown as HistorystokRinciDto;
  }
}
