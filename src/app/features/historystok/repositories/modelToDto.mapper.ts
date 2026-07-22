import { HistorystokDto } from '../models/historystok.dto';
import { Historystok } from '../models/historystok.model';

export class ModelToDtoMapper {
  static toDto(model: Historystok): HistorystokDto {
    return model as unknown as HistorystokDto;
  }
}
