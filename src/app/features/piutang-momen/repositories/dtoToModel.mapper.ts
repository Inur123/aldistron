import { PiutangMomenDto } from '../models/piutang-momen.dto';
import { PiutangMomen } from '../models/piutang-momen.model';

export class DtoToModelMapper {
  static toModel(dto: PiutangMomenDto): PiutangMomen {
    return dto as unknown as PiutangMomen;
  }

  static toModelList(dtos: PiutangMomenDto[]): PiutangMomen[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
