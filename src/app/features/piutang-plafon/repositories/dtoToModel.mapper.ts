import { PiutangPlafonDto } from '../models/piutang-plafon.dto';
import { PiutangPlafon } from '../models/piutang-plafon.model';

export class DtoToModelMapper {
  static toModel(dto: PiutangPlafonDto): PiutangPlafon {
    return dto as unknown as PiutangPlafon;
  }

  static toModelList(dtos: PiutangPlafonDto[]): PiutangPlafon[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
