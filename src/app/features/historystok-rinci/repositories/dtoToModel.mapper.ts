import { HistorystokRinciDto } from '../models/historystok-rinci.dto';
import { HistorystokRinci } from '../models/historystok-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: HistorystokRinciDto): HistorystokRinci {
    return dto as unknown as HistorystokRinci;
  }

  static toModelList(dtos: HistorystokRinciDto[]): HistorystokRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
