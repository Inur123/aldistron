import { RuteKunjungRinciDto } from '../models/rute-kunjung-rinci.dto';
import { RuteKunjungRinci } from '../models/rute-kunjung-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: RuteKunjungRinciDto): RuteKunjungRinci {
    return dto as unknown as RuteKunjungRinci;
  }

  static toModelList(dtos: RuteKunjungRinciDto[]): RuteKunjungRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
