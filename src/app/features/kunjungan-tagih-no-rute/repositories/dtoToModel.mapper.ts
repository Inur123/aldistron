import { KunjunganTagihNoRuteDto } from '../models/kunjungan-tagih-no-rute.dto';
import { KunjunganTagihNoRute } from '../models/kunjungan-tagih-no-rute.model';

export class DtoToModelMapper {
  static toModel(dto: KunjunganTagihNoRuteDto): KunjunganTagihNoRute {
    return dto as unknown as KunjunganTagihNoRute;
  }

  static toModelList(dtos: KunjunganTagihNoRuteDto[]): KunjunganTagihNoRute[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
