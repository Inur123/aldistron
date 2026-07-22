import { KunjunganTagihRinciDto } from '../models/kunjungan-tagih-rinci.dto';
import { KunjunganTagihRinci } from '../models/kunjungan-tagih-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: KunjunganTagihRinciDto): KunjunganTagihRinci {
    return dto as unknown as KunjunganTagihRinci;
  }

  static toModelList(dtos: KunjunganTagihRinciDto[]): KunjunganTagihRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
