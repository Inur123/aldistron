import { RuteKunjungDto } from '../models/rute-kunjung.dto';
import { RuteKunjung } from '../models/rute-kunjung.model';

export class DtoToModelMapper {
  static toModel(dto: RuteKunjungDto): RuteKunjung {
    return dto as unknown as RuteKunjung;
  }

  static toModelList(dtos: RuteKunjungDto[]): RuteKunjung[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
