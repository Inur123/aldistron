import { HistorystokDto } from '../models/historystok.dto';
import { Historystok } from '../models/historystok.model';

export class DtoToModelMapper {
  static toModel(dto: HistorystokDto): Historystok {
    return dto as unknown as Historystok;
  }

  static toModelList(dtos: HistorystokDto[]): Historystok[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
