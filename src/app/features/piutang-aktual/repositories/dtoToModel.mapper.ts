import { PiutangAktualDto } from '../models/piutang-aktual.dto';
import { PiutangAktual } from '../models/piutang-aktual.model';

export class DtoToModelMapper {
  static toModel(dto: PiutangAktualDto): PiutangAktual {
    return dto as unknown as PiutangAktual;
  }

  static toModelList(dtos: PiutangAktualDto[]): PiutangAktual[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
