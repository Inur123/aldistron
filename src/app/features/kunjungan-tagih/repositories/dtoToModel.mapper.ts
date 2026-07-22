import { KunjunganTagihDto } from '../models/kunjungan-tagih.dto';
import { KunjunganTagih } from '../models/kunjungan-tagih.model';

export class DtoToModelMapper {
  static toModel(dto: KunjunganTagihDto): KunjunganTagih {
    return dto as unknown as KunjunganTagih;
  }

  static toModelList(dtos: KunjunganTagihDto[]): KunjunganTagih[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
